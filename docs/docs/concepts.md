# 基本概念

## Realm
`Realm`，中文译作领域，是GnoLand中智能合约实例的代称，一个`Realm`代表一个特定的实例化合约，`Realm`有以下特点。

- Gnolang开发的合约代码
- `Realm`包含状态变量
- 默认的部署路径为`gno.land/r/`

## Package
`Package`即包，也可以理解为库，也是由gnolang编写的，有以下特点。
- 可以被`Realm`调用的包含基础实用功能的函数集合
- `Package`不包含状态变量
- 默认的部署路径为`gno.land/p/`
- 可以被`Realm`或其它`Package`通过`import`进行引用

## GnoVM

`GnoVM`是用来执行`Gnolang`合约代码的虚拟机。`Gnolang`是为区块链优化的自定义版本Golang，具有自动状态管理，完全确定性等特点。和Go语言语法类似。

`GnoVM`是和`Tendermint2`一起工作的，通过嵌入式智能合约实现更智能、更模块化、更透明的应用程序链。它也可以在非Cosmos区块链中使用。
