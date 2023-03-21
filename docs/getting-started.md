# 基本配置

本节为linux平台gnoland环境的基本配置指南，目前gno暂不支持windwos平台开发。

## 安装Golang
```bash
# 下载golang安装包
wget https://dl.google.com/go/go1.20.2.linux-amd64.tar.gz

# 解压到/usr/local/go目录下
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.2.linux-amd64.tar.gz

# 配置go路径
echo "export PATH=$PATH:/usr/local/go/bin" >> /etc/profile

source /etc/profile
```

完成以上操作后，执行go version验证是否成功安装。
```bash
go version

# 如果配置正确会得到以下输出
#
# go version go1.20.2 linux/amd64

```

## 安装GnoLand
```bash
# 安装git和make
apt-get install -y git make

# 创建工作目录并拉取gno代码，此处以~/workspace为例
mkdir ~/workspace

cd ~/workspace

git clone https://github.com/gnolang/gno

# 编译gno工程
cd gno

make

# 完成编译后的文件将会安装在~/workspace/gno/build目录下
# 执行以下命令检查是否构建成功
./build/gnokey

# 执行以上命令将得到下面的输出
# USAGE
#   <subcommand> [flags] [<arg>...]

# Manages private keys for the node

# SUBCOMMANDS
#   add        Adds key to the keybase
#   delete     Deletes a key from the keybase
#   generate   Generates a bip39 mnemonic
#   export     Exports private key armor
#   import     Imports encrypted private key armor
#   list       Lists all keys in the keybase
#   sign       Signs the document
#   verify     Verifies the document signature
#   query      Makes an ABCI query
#   broadcast  Broadcasts a signed document
#   maketx     Composes a tx document to sign

# FLAGS
#   -home /home/ubuntu/.gno         home directory
#   -insecure-password-stdin=false  WARNING! take password from stdin
#   -quiet=false                    suppress output during execution
#   -remote 127.0.0.1:26657         remote node URL
```
## 下一步
恭喜!:tada::tada::tada:你已完成GnoLand的基本配置，下面开始你的智能合约之旅吧！！！