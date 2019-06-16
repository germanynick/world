import { Service } from "moleculer";
import { action, param, service } from "moleculer-service-decorators";

@service({
  name: "greeter",
})
class GreeterService extends Service {
  /**
   *  Hello Action
   *
   * @actions
   *
   * @param {string} name - Personal name
   *
   * @returns {string}
   *
   * @memberof GreeterService
   */

  @action()
  public hello(@param({ type: "string" }) name: string): string {
    return `Hello ${name}`;
  }
}

export = GreeterService;
