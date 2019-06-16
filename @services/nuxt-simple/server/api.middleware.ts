import * as path from 'path'
import { ServiceBroker } from 'moleculer'
import * as ApiGateway from 'moleculer-web'
import { Request } from 'express'

const broker = new ServiceBroker({
  logger: true,
  logLevel: 'info',
  transporter: 'NATS',
  serializer: 'JSON'
})

const apiService = broker.createService({
  name: 'api',
  mixins: [ApiGateway],
  settings: {
    middleware: true,
    routes: [
      {
        path: '/',
        whitelist: ['**']
      }
    ]
  }
})

broker.start()

export default apiService.express()
