# 运行本地节点

开发测试阶段，可以在本地运行开发节点，进行验证，下面说明如何在本地启动测试节点并给自己的测试账号添加测试代币。

## 添加测试账号
```bash
gnokey add --recover test1
```
输入以下助记词
> source bonus chronic canvas draft south burst lottery vacant surface solve popular case indicate oppose farm nothing bullet exhibit title speed wink action roast


## 启动本地节点
```bash
gnoland
```
默认`chainid`为`dev`, 端口为`localhost:26657`。

## 启动faucet server
```bash
gnofaucet serve --chain-id dev test1
```
默认情况下，水龙头每次发送1,000,000ugnot(1gnot)，你可以通过修改`--send`来修改每次发送代币数量。
```bash
# 一次发送500gnot
gnofaucet serve --chain-id dev --send 5000000000ugnot test1
```
## 启动gnoland website
```bash
gnoweb
```
现在你就可以在 http://localhost:8888/faucet 获取测试代币。