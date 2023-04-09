# 客户端

## gnokey
`gnokey`是用来管理`https://gno.land"账户以及主网交互的主要工具，主要包含以下功能。

### 子命令

Name        |Description
---         |---
`add`       | 添加账户到本地数据库
`delete`    | 删除本地账户
`generate`  | 生成一组**bip39**助记词
`export`    | 导出加密后的私钥
`import`    | 导入加密后的私钥
`list`      | 列举当前所有的账户
`sign`      | 对消息文本进行签名
`verify`    | 验证签名后的消息文本
`query`     | `ABCI`查询
`broadcast` | 广播消息
`maketx`    | 生成要签名的交易文本

每个子命令usage可以输入`gnokey $SUB_CMD --help`进行查看。

## gnoland

`gnoland`用来启动一个Gno节点。

### 选项
Name                    | Description           | default
---                     | ---                   | ---
chainid                 | 链id                  | dev
genesis-balances-file   | gnot初始分配文件       | gno.land/genesis/genesis_balances.txt
genesis-remote          | 监听端口              | localhost:26657
genesis-txs-file        | 初始交易文件           | gno.land/genesis/genesis_txs.txt
root-dir                | 配置和数据存储目录     | testdir
skip-failing-genesis-txs| 忽略失败的初始交易     | false
skip-start              | 初始化后退出，不启动节点  | false

## gnodev

`gnodev`是用于开发的测试工具，你可以使用`gnodev`在不启动区块链的情况下使用`GnoVM`在本地环境构建和测试Realm。

### 子命令

Name            |Description
---             |---
`build`         | 构建一个gno package
`test`          | 执行gno package的单元测试
`precompile`    | 预编译.gno文件为.go文件
`repl`          | 启动gno repl

每个子命令usage可以输入`gnodev $SUB_CMD --help`进行查看。
