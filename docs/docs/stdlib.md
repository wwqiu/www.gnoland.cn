# 标准库
在使用`Gnolang`语言开发智能合约的过程中，开发人员可以使用`GnoVM`提供的核心标准库`stdlib`。

导入方法：

```go
import "std"
```

## std.AssertOriginCall

```go
func AssertOriginCall()
```
检查合约是否直接调用，否则panic

## std.IsOriginCall
```go
func IsOriginCall() bool
```
检查合约是否直接调用，是返回`true`，否则返回`false`。

## std.Hash
```go
func Hash(bz []byte) [20]byte
```
计算哈希

## std.CurrentRealmPath
```go
func CurrentRealmPath() string
```
获取当前Realm的路径

## std.GetChainID
```go
func GetChainID() string
```
获取链id

## std.GetHeight
```go
func GetHeight() int64
```
获取区块高度

## std.GetOrigSend
```go
func GetOrigSend() Coins
```
获取当前交易的代币发送信息

## std.GetOrigCaller
```go
func GetOrigCaller() Address
```
获取当前交易发起用户地址

## std.GetOrigPkgAddr
```go
func GetOrigPkgAddr() Address
```
获取当前package地址

## std.GetCallerAt
```go
func GetCallerAt(n int) Address
```
获取调用堆栈中索引为n的调用者地址

## std.GetBanker
```go
func GetBanker(bankerType BankerType) Banker
```
获取Banker, 其中BankerType取值如下：
- BankerTypeReadonly
- BankerTypeOrigSend
- BankerTypeRealmSend
- BankerTypeRealmIssue

## std.GetTimestamp
```go
func GetTimestamp() Time
```
获取时间戳

## std.FormatTimestamp
```go
func FormatTimestamp(timestamp Time, format string) string
```
格式化时间戳

## std.EncodeBech32
```go
func EncodeBech32(prefix string, bytes [20]byte) Address
```
输入前缀和哈希值编码成Bech32格式的地址

## std.DecodeBech32
```go
func DecodeBech32(addr Address) (prefix string, bytes [20]byte, ok bool)
```
解码Bech32格式地址

## std.DerivePkgAddr
```go
func DerivePkgAddr(pkgPath string) Address
```
输入package路径，获取对应的地址



