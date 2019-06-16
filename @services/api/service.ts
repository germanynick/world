import { Service } from "moleculer";
import { service } from "moleculer-service-decorators";
import ApiGateway = require("moleculer-web");

@service({
  name: "api",
  mixins: [ApiGateway],
  settings: {
    port: process.env.PORT || 3000,
    routes: [
      {
        path: "/api",
        whitelist: ["**"],
      },
    ],
  },
})
class ApiService extends Service {}

export = ApiService;
