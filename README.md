# vacation

開發

```shell
# 啟動 node
yarn app

# 本機開發
yarn dev
```

https://localhost:8080

## https 設定(本機)

1. 安裝 [mkcert](https://github.com/FiloSottile/mkcert) 工具並產生 SSL 憑證

2. 新增 `.env.local`

```
SSL_CERT_FILE=<憑證位置>
SSL_KEY_FILE=<憑證key位置>
```
