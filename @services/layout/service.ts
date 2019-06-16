import { Service } from "moleculer";
import DbService from "moleculer-db";
import MongooseAdapter from "moleculer-db-adapter-mongoose";
import { action, param, service } from "moleculer-service-decorators";
import { LayoutModel } from "./models";

@service({
  name: "layout",
  mixins: [DbService],
  adapter: new MongooseAdapter("mongodb://localhost:27017/layout"),
  model: LayoutModel,
})
class LayoutService extends Service {
  /**
   *  Hello Action
   *
   * @actions
   *
   * @param {string} name - Personal name
   *
   * @returns {string}
   *
   * @memberof LayoutService
   */

  @action()
  public hello(@param({ type: "string" }) name: string): string {
    return `Hello ${name}`;
  }
}

export = LayoutService;
