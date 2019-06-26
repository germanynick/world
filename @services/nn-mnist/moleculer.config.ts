"use strict";
import { BrokerOptions, Errors, ServiceBroker } from "moleculer";

// More info about options: https://moleculer.services/docs/0.13/broker.html#Broker-options
const brokerConfig: BrokerOptions = {
  namespace: "",

  logger: true,
  logLevel: "info",
  logFormatter: "default",

  transporter: "NATS",

  cacher: "Memory",

  serializer: "JSON",

  requestTimeout: 10 * 1000,

  maxCallLevel: 100,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,

  tracking: {
    enabled: false,
    shutdownTimeout: 5000,
  },

  disableBalancer: false,

  registry: {
    strategy: "RoundRobin",
    preferLocal: true,
  },

  bulkhead: {
    enabled: false,
    concurrency: 10,
    maxQueueSize: 100,
  },

  validation: true,

  metrics: false,
  metricsRate: 1,

  internalServices: true,
  internalMiddlewares: true,

  hotReload: false,

  // Register custom middlewares
  middlewares: [],

  // Called after broker created.
  created(broker: ServiceBroker) {},

  // Called after broker starte.
  started(broker: ServiceBroker) {},

  // Called after broker stopped.
  stopped(broker: ServiceBroker) {},
};

export = brokerConfig;
