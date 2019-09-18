import { ServiceBroker } from 'moleculer'
import * as ApiGateway from 'moleculer-web'

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
