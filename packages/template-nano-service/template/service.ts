import { Service } from "moleculer";
import { action, param, service } from "moleculer-service-decorators";

@service({
  name: "{{serviceName}}",
})
class {{capitalize (serviceName)}}Service extends Service {
  /**
   *  Hello Action
   *
   * @actions
   *
   * @param {string} name - Personal name
   *
   * @returns {string}
   *
   * @memberof {{capitalize (serviceName)}}Service
   */

  @action()
  public hello(@param({ type: "string" }) name: string): string {
    return `Hello ${name}`;
  }
}

export = {{capitalize (serviceName)}}Service;
