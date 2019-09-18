import { Service } from "moleculer";
import DbService from "moleculer-db";
import MongooseAdapter from "moleculer-db-adapter-mongoose";
import { service } from "moleculer-service-decorators";
import { Document, model, Schema } from "mongoose";

interface ICoffeeDocument extends Document {
  name: string;
  description?: string;
  imageUrl?: string;
}

const CoffeeSchema = new Schema<ICoffeeDocument>({
  name: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

const CoffeeModel = model<ICoffeeDocument>("Coffee", CoffeeSchema);

@service({
  name: "coffee",
  mixins: [DbService],
  adapter: new MongooseAdapter("mongodb://localhost:27017/project-1"),
  model: CoffeeModel,
})
class CoffeeService extends Service {}

export = CoffeeService;
