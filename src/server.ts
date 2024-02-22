import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0', // localhost, 127.0.0.1, 0.0.0.0, etc.
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
