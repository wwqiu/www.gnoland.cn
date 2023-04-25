---
sidebar: false
---

![gnoland](/gnoland.png)

# 区块链开发公司onbloc发布23年第一季度Gnoland相关项目更新

*区块链开发公司更新了他们在2023年第一季度的开发进度，具体内容可以访问[这里](https://medium.com/onbloc/2023-q1-onbloc-quarterly-update-a2ea169255a1), 下面是该内容的简单归纳*
## Adena钱包

Adena是一个友好的、开源的、非托管的Gnoland钱包。查看[网站](https://adena.app/)了解更多信息。

### 最近更新

- *支持Ledger硬件钱包*
- *支持本地开发测试网**
- *支持私钥导入导出*
- *支持Google账户登录*
- *UI/UX优化*
- *安全性增强*
- *交易签名功能完善*

### 开发中特性

- *GRC-20 GRC721标准代币支持*
- *Gno IDE支持*
- *多链 & IBC支持*
- *链接和域名发送支持*
- *移动端app*

## Gnoswap

Gnoswap是由Gnoland提供支持的第一个去中心化交易所(DEX)，旨在简化集中的流动性体验，提高交易者的资本效率。Gnoswap正在积极开发中。

### 最近更新

- *初始概念构思*
- *计划和设计Gnoswap的web应用*
- *开源gnoswap接口*
- *招聘经验丰富的开发者*

### 后续事项
- *招聘更多的开发者*
- *gnoswap core v1开发*
- *开源gnoswap core v1*
- *招募合作伙伴*

## Gnoland核心代码贡献
onbloc第一季度对Gnoland的贡献有以下几个方面。
- **Math**: 目前GnoVM的数学库都是基于`int64`和`uint64`的，对于包含复杂运算的dapp来说可能有效范围会太短，为此onbloc提供了`bigint`的大数实现。([GitHub Issue](https://github.com/gnolang/gno/issues/741) | [GitHub PR](https://github.com/gnolang/gno/pull/764))

- **CreatePackage**: 目前GnoLand只能通过`addpkg`创建合约，通过引入`CreatePackge`使得开发者可以在合约代码中动态创建合约，这在一些合约(例如多签钱包)中会非常有用。([GitHub Issue](https://github.com/gnolang/gno/issues/757) | [GitHub PR](https://github.com/gnolang/gno/pull/715))

- **Gno-JS-Client-SDK**: Gno的JavaScript SDK，为将来的dapp开发者提供更多的便利。([GitHub](https://github.com/gnolang/gno-js-sdk))

## 其它

- **Gnoscan**: 优化UI, 支持`GRC-20`代币查看。

- **Gnoland Developer Portal**: 上线了Gnoland开发者门户，提供了基础的文档。