const isDev = process.env.NODE_ENV === 'development'

export default {
  baseUrl: {
    dev: 'http://localhost:3002',
    pro: '',
  },
  publicPath: [/^\/v1\/public/, /^\/v1\/login/],
  wsconfig: {
    url: isDev ? '127.0.0.1' : 'tech.zzf.net.cn/websocket',
    port: isDev ? '3001' : 11007,
    protocol: isDev ? 'ws' : 'wss',
  },
}
