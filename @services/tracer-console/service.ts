import { Service } from "moleculer";
import ConsoleTracer from "moleculer-console-tracer";
import { service } from "moleculer-service-decorators";

@service({
  name: "tracer-console",
  mixins: [ConsoleTracer],
  settings: {
    width: 100,
    gaugeWidth: 50,
  },
})
class ConsoleTracerService extends Service {}

export = ConsoleTracerService;
