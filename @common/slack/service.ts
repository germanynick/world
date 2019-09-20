import { Service } from "moleculer";
import { service } from "moleculer-service-decorators";
import MoleculerSlack from "moleculer-slack";

@service({
  name: "slack",
  mixins: [MoleculerSlack],
})
class SlackService extends Service {}

export = SlackService;
