import { Service } from "moleculer";
import { action, param, service } from "moleculer-service-decorators";

@service({
  name: "nn-mnist",
})
class MnistService extends Service {
  /**
   *  Hello Action
   *
   * @actions
   *
   * @param {string} name - Personal name
   *
   * @returns {string}
   *
   * @memberof MnistService
   */

  @action()
  public hello(@param({ type: "string" }) name: string): string {
    return `Hello ${name}`;
  }
}

export = MnistService;
