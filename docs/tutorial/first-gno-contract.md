# 第一个Gno智能合约

本节将演示如何编写一个简单的GRC20代币合约，GRC20是以太坊ERC20的GnoLand实现版本，具体可以参考[ERC20代币标准](https://ethereum.org/zh/developers/docs/standards/tokens/erc-20/)。

## GRC20合约代码
打开gno工程目录，执行一下命令创建实例合约目录。
```bash
mkdir -p example/gno.land/r/demo/my_token
```
在新建的目录下创建`my_token.gno`源文件，代码如下。

```go
// my_token.gno
package my_token

import (
	"std"
	"strings"
	"gno.land/p/demo/grc/grc20"
	"gno.land/p/demo/ufmt"
	"gno.land/r/demo/users"
)

var (
	foo   *grc20.AdminToken
	admin std.Address = "g1hqz8gynuw92qwqqwneha43gk7v2ectgt5qh7jv" // 管理员地址
)

// 初始化函数，每个realm都需要实现，在部署到链上的时候会调用一次
func init() {
	foo = grc20.NewAdminToken("MY_TOKEN", "MT", 4)
}

// TotalSupply 获取总供应量
func TotalSupply() uint64 {
	return foo.TotalSupply() // 返回总供应量
}

// BalanceOf 获取指定地址的余额
// 参数 owner: 用户地址
func BalanceOf(owner users.AddressOrName) uint64 {
	balance, err := foo.BalanceOf(owner.Resolve()) // 获取指定地址的余额
	if err != nil {
		panic(err)
	}
	return balance
}

// Allowance 获取授权额度
// 参数 owner: 用户地址
// 参数 spender: 授权地址
func Allowance(owner, spender users.AddressOrName) uint64 {
	allowance, err := foo.Allowance(owner.Resolve(), spender.Resolve()) // 获取授权额度
	if err != nil {
		panic(err)
	}
	return allowance
}

// Transfer 转账
// 参数 to: 接收地址
// 参数 amount: 转账金额
func Transfer(to users.AddressOrName, amount uint64) {
	caller := std.GetOrigCaller() // 获取调用者地址
	foo.Transfer(caller, to.Resolve(), amount) // 转账
}

// Approve 授权
// 参数 spender: 授权地址
// 参数 amount: 授权金额
func Approve(spender users.AddressOrName, amount uint64) {
	caller := std.GetOrigCaller() // 获取调用者地址
	foo.Approve(caller, spender.Resolve(), amount) // 授权
}

// TransferFrom 从指定地址转账
// 参数 from: 转出地址
// 参数 to: 接收地址
// 参数 amount: 转账金额
func TransferFrom(from, to users.AddressOrName, amount uint64) {
	caller := std.GetOrigCaller() // 获取调用者地址
	foo.TransferFrom(caller, from.Resolve(), to.Resolve(), amount) // 从指定地址转账
}

// 领取代币
func Faucet() {
	caller := std.GetOrigCaller() // 获取调用者地址
	foo.Mint(caller, 1000*10000) // 领取代币
}

// 铸造代币
func Mint(address users.AddressOrName, amount uint64) {
	foo.Mint(address.Resolve(), amount)
}

// 销毁代币
func Burn(address users.AddressOrName, amount uint64) {
	caller := std.GetOrigCaller()
	if caller != admin {
		panic("restricted access")
	}
	foo.Burn(address.Resolve(), amount)
}

// Render函数
func Render(path string) string {
	parts := strings.Split(path, "/")
	c := len(parts)
	switch {
	case path == "":
		return foo.RenderHome()
	case c == 2 && parts[0] == "balance":
		owner := users.AddressOrName(parts[1])
		balance, _ := foo.BalanceOf(owner.Resolve())
		return ufmt.Sprintf("%d\n", balance)
	default:
		return "404\n"
	}
}
```

## 发布Realm到测试网
- 调用addpkg将你的合约发布到测试网
```bash
./build/gnokey maketx addpkg \
    --pkgpath "gno.land/r/my_token" \
    --pkgdir "examples/gno.land/r/demo/my_token" \
    --deposit 100000000ugnot \
    --gas-fee 1000000ugnot \
    --gas-wanted 10000000 \
    --broadcast \
    --chainid test3 \
    --remote test3.gno.land:36657 \
    ACCOUNT_NAME
```
发布成功之后可以在[gnoscan](https://gnoscan.io/realms)上面查看你的Realm。

## Realm交互
本节将演示如何和上面的`my_token`进行交互，其中gno代码中大写字母开头的函数为Public函数，可以通过call接口进行交互。
::: tip
接口根据是否改变Realm内部状态分为两种：
- 不改变Realm内部状态的接口可以通过query和maketx call交互，区别在于query不需要消耗gas
- 对于改变Realm内部状态的接口，必须通过maketx call进行交互
:::

- Faucet
```bash
./build/gnokey maketx call \
    --pkgpath "gno.land/r/my_token" \
    --func "Faucet" \
    --gas-fee "10ugnot" \
    --gas-wanted "2000000" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME
```
- BalanceOf

`BalanceOf`不改变Realm的内部状态，所以通过maketx call和query都可以交互。
```bash
# maketx call
./build/gnokey maketx call \
    --pkgpath "gno.land/r/my_token" \
    --func "BalanceOf" \
	--args "QUERY_ADDR" \
    --gas-fee "10ugnot" \
    --gas-wanted "2000000" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME

# query
./build/gnokey query --data "gno.land/r/my_token
BalanceOf(\"QUERY_ADDR\")" --remote test3.gno.land:36657 "vm/qeval"
```

由于my_token的render接口也处理了balance请求，这里同样可以通过query vm/qrender来获取代币余额。
```bash
# 通过render查询
./build/gnokey query "vm/qrender" --data "gno.land/r/my_token
balance/QUERY_ADDR" --remote test3.gno.land:36657
```
这里的`QUERY_ADDR`为需要查询的地址。
- Transfer

```bash
./build/gnokey maketx call \
    --pkgpath "gno.land/r/my_token" \
    --func "Transfer" \
	--args "TO_ADDR" \
	--args "1000000" \
    --gas-fee "10ugnot" \
    --gas-wanted "2000000" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME
```
- TransferFrom
`TransferFrom`是grc20的授权接口，需要配合`Approve`接口使用，代币持有地址(owner)调用`Approve`接口给spender授权，获取授权后spender调用`TransferFrom`接口转移owner地址的代币，这里不做演示，大家可以自行尝试。
