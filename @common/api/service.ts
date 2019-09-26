import { Service } from "moleculer";
import { service } from "moleculer-service-decorators";
import MoleculerWeb from "moleculer-web";

@service({
  name: "api",
  mixins: [MoleculerWeb],
  settings: {
    port: process.env.PORT || 9000,
    routes: [
      {
        path: "/api",
        whiteList: ["**"],
      },
    ],
  },
})
class ApiService extends Service {}

export = ApiService;
