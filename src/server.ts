import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT || 10000,
  })
  .then(() => {
    console.log('HTTP Server running!')
  })
