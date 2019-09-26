import { Service } from "moleculer";
import MoleculerPrometheus from "moleculer-prometheus";
import { action, param, service } from "moleculer-service-decorators";

@service({
  name: "prometheus",
  mixins: [MoleculerPrometheus],
})
class PrometheusService extends Service {}

export = PrometheusService;
