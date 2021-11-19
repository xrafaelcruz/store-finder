// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
    API_URL: '',
    MAP_ACCESS_TOKEN:
      'pk.eyJ1IjoieHJhZmFlbGNydXoiLCJhIjoiY2t1dmpwNmp2NjljZTJ1azZyanR1cDkyNiJ9.cyIhQbwnwWc-qeCwdMp1mQ'
  }
})
