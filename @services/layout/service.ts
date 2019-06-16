import { Service } from "moleculer";
import DbService from "moleculer-db";
import MongooseAdapter from "moleculer-db-adapter-mongoose";
import { action, service } from "moleculer-service-decorators";
import { LayoutModel } from "./models";

@service({
  name: "layout",
  mixins: [DbService],
  adapter: new MongooseAdapter("mongodb://localhost:27017/layout"),
  model: LayoutModel,
})
class LayoutService extends Service {}

export = LayoutService;
