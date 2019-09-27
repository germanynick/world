import { NodeHealthStatus, Service } from "moleculer";
import { event, service } from "moleculer-service-decorators";
import MoleculerSlack from "moleculer-slack";

@service({
  name: "slack",
  mixins: [MoleculerSlack],
})
class SlackService extends Service {
  @event({ name: "$node.connected" })
  public nodeConnected({ node, reconnected }: any) {
    this.broker.call("slack.send", {
      message: `${new Date().toISOString()} Node "${
        node.id
      }" connected. (Reconnected: ${reconnected}).\n\tServices: ${node.services
        .slice(1, node.services.length)
        .map((s: Service) => s.name)
        .join(", ")}`,
      channel: "services",
    });
  }

  @event({ name: "$node.disconnected" })
  public nodeDisconnected({ node, unexpected }: any) {
    this.broker.call("slack.send", {
      message: `${new Date().toISOString()} Node "${
        node.id
      }" disconnected. (Unexpected: ${unexpected})`,
      channel: "services",
    });
  }
}

export = SlackService;
