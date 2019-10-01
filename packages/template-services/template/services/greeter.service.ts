import { Service } from "moleculer";
import { action, param, service } from "moleculer-service-decorators";

@service({
  name: "greeter",
})
class GreeterService extends Service {
  /**
   * Hello action
   *
   * @action
   *
   * @returns {string}
   *
   * @memberof GreeterService
   */
  @action()
  public hello(): string {
    return "Hello Moleculer";
  }

  /**
   *  Welcome Action
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
  public async welcome(
    @param({ type: "string" }) name: string,
  ): Promise<string> {
    return `Welcome, ${name}`;
  }
}

export = GreeterService;
