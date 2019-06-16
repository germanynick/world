import * as tf from "@tensorflow/tfjs";
import { Service } from "moleculer";
import { action, param, service } from "moleculer-service-decorators";
import { model } from "./models";

@service({
  name: "nn-simple",
})
class SimpleNNService extends Service {
  @action({ name: "train" })
  public async train() {
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);
    await model.fit(xs, ys);

    return "Train completed.";
  }

  @action({ name: "test" })
  public async test(@param({ type: "number" }) value: number) {
    const zs = tf.tensor2d([value], [1, 1]);
    const result = model.predict(zs) as tf.Tensor;
    return result.dataSync();
  }
}

export = SimpleNNService;
