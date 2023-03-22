# 测试网交互
本节通过对GnoLand主网进行一些基本交互（基于test3测试网），让你对GnoLand有个初步认识，事不宜迟，让我们开始吧！

## 创建账户
进入gno工程目录，然后用gnokey生成助记词。
```bash
./build/gnokey generate
```
用生成的助记词创建你的账户
```bash
./build/gnokey add KEYNAME --recover
```
注意：这里的`KEYNAME`是你账户的标识，请根据自己的喜好修改。  

确认你的账户是否添加成功
```bash
./build/gnokey list
```
到这里，你的账户已经准备好了，下面可以开始测试网的交互。
## 获取测试代币
可以到[https://test3.gno.land/faucet](https://test3.gno.land/faucet)获取测试代币，注意账号的代币数量必须为0。 

- 获取账户信息
```bash
./build/gnokey query --remote "test3.gno.land:36657" auth/accounts/ACCOUNT_ADDR
```
这里的`ACCOUNT_ADDR`为你的账户地址，可以通过`./build/gnokey list`查看。

- 发送代币
```bash
./build/gnokey maketx send \
    --send "10000000ugnot" \
    --to "DEST_ADDR" \
    --gas-fee "1ugnot" \
    --gas-wanted "2000000" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME
```
::: warning
如果通过水龙头获取代币失败，可以去[Discord](https://discord.gg/3YbdqVP8Tb)的`testnet-support`频道索要代币
:::

## 合约交互

### 注册测试网用户
目前测试网提供了一个名为`users`的合约，通过该合约你可以在测试网中注册一个用户标识和你的地址绑定。

- Register
```bash
./build/gnokey maketx call \
    --pkgpath "gno.land/r/demo/users" \
    --func "Register" \
    --args "" \
    --args "USER_NAME" \
    --args "" \
    --gas-fee "10ugnot" \
    --gas-wanted "2000000" \
    --send "200000000ugnot" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME

```
这里的`USER_NAME`为你的用户名，注册成功后，你可以在[这里](https://test3.gno.land/r/demo/users)查看你的注册信息。

### 创建留言板
测试网提供了`boards`合约，实现了创建留言板，写留言以及回复等功能，下面演示如何创建你自己的留言板。

- CreateBoard
```bash
./build/gnokey maketx call \
    --pkgpath "gno.land/r/demo/boards" \
    --func "CreateBoard" \
    --args "BOARD_NAME" \
    --gas-fee "1000000ugnot" \
    --gas-wanted "1000000" \
    --broadcast \
    --chainid "test3" \
    --remote "test3.gno.land:36657" \
    ACCOUNT_NAME
```
创建成功后可以在[这里](https://test3.gno.land/r/demo/boards)查看你的留言板。 

--- 
以上就是测试网的基本交互，到这里我们已经对GnoLand有了一个基本的了解，下面将编写我们的第一个智能合约(Realm)。