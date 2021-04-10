module.exports = {
  id: 'UA-175214270-1', // Used as fallback if no runtime config is provided
  debug: {
    enabled: process.env.NODE_ENV === 'development',
    sendHitTask: process.env.NODE_ENV === 'development',
  },
}
