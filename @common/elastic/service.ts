import { Client, ClientOptions, RequestParams } from "@elastic/elasticsearch";
import { Context, Service, ServiceSettingSchema } from "moleculer";
import {
  action,
  param,
  service,
  serviceStarted,
} from "moleculer-service-decorators";
import { schema } from "ts-transformer-json-schema";

interface IServiceSettingSchema extends ServiceSettingSchema {
  elasticOptions: ClientOptions;
}

@service({
  name: "elastic",
  settings: {
    elasticOptions: {
      // CLOUD
      //
      // cloud: {
      //   id: process.env.ELASTICSEARCH_CLOUD_ID,
      // },
      // auth: {
      //   username: process.env.ELASTICSEARCH_EMAIL,
      //   password: process.env.ELASTICSEARCH_PASSWORD,
      // },

      // LOCAL
      node: "http://localhost:9200",
    },
  },
})
class ElasticService extends Service<IServiceSettingSchema> {
  private client!: Client;

  @action({ params: schema<RequestParams.Bulk>() })
  public async bulk(ctx: Context<RequestParams.Bulk>) {
    return this.client.bulk(ctx.params);
  }

  @action({ params: schema<RequestParams.Create>() })
  public async create(ctx: Context<RequestParams.Create>) {
    return this.client.create(ctx.params);
  }

  @action({ params: schema<RequestParams.Get>() })
  public async get(ctx: Context<RequestParams.Get>) {
    return this.client.get(ctx.params);
  }

  @action({ params: schema<RequestParams.Update>() })
  public async update(ctx: Context<RequestParams.Update>) {
    return this.client.update(ctx.params);
  }

  @action({ params: schema<RequestParams.Delete>() })
  public async delete(ctx: Context<RequestParams.Delete>) {
    return this.client.delete(ctx.params);
  }

  @action({ params: schema<RequestParams.Count>() })
  public async count(ctx: Context<RequestParams.Count>) {
    return this.client.count(ctx.params);
  }

  @action({ params: schema<RequestParams.Search>() })
  public async search(ctx: Context<RequestParams.Search>) {
    return this.client.search(ctx.params);
  }

  @action()
  public async call(
    @param({ type: "string" }) api: string,
    @param({ type: "any", optional: true }) params?: any,
  ) {
    const apiMethod = (this.client as any)[api];

    if (!apiMethod || typeof apiMethod !== "function") {
      throw new Error("Invalid API");
    }

    return apiMethod(params);
  }

  //#region LIFECYCLE
  @serviceStarted()
  public serviceStart() {
    this.client = new Client(this.settings.elasticOptions);
  }
  //#endregion
}

export = ElasticService;
