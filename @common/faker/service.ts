import { Service } from "moleculer";
import MoleculerFake from "moleculer-fake";
import { service } from "moleculer-service-decorators";

@service({
  name: "faker",
  mixins: [MoleculerFake],
})
class FakerService extends Service {}

export = FakerService;
