const isDev = process.env.NODE_ENV === 'development'

export default {
  baseUrl: {
    dev: 'http://localhost:3002',
    pro: 'http://zzf.net.cn:11005',
  },
  publicPath: [/^\/public/, /^\/login/],
  wsconfig: {
    url: isDev ? '127.0.0.1' : 'zzf.net.cn',
    port: isDev ? '3001' : 22001,
  },
}
