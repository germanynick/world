import Ewelink from "ewelink-api";
import { Errors, Service } from "moleculer";
import {
  action,
  param,
  service,
  serviceStarted,
} from "moleculer-service-decorators";

@service({
  name: "ewelink",
  settings: {
    options: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
    },
  },
})
class EwelinkService extends Service {
  private ewelink!: Ewelink;

  @action()
  public async allDevices() {
    return this.ewelink.getDevices();
  }

  @action()
  public async getDevice(@param({ type: "string" }) deviceId: string) {
    return this.ewelink.getDevice(deviceId);
  }

  @action()
  public async toggleDevice(@param({ type: "string" }) deviceId: string) {
    this.logger.info("toggleDeviceId", deviceId);

    return this.ewelink.toggleDevice(deviceId);
  }

  @action()
  public async setDevicePowerState(
    @param({ type: "string" }) deviceId: string,
    @param({ type: "string" }) state: string = "on",
  ) {
    this.logger.info("setDevicePowerState", deviceId, state);
    const response = await this.ewelink.setDevicePowerState(deviceId, state);
    if (response.status !== "ok") {
      throw new Errors.MoleculerError(response.msg);
    }

    return response;
  }

  @serviceStarted()
  public async startService() {
    this.ewelink = new Ewelink(this.settings.options);
  }
}

export = EwelinkService;
