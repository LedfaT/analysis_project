const { WifiModule } = require("../Entity");
const WifiModuleOut = require("../models/out/wifiModule/wifiModuleOut");
const ApiError = require("../exeptions/api-error");

class wifiModuleService {
  async create(title, generation, cost) {
    const wifiModule = await WifiModule.findOne({
      where: { title },
    });

    if (wifiModule) {
      throw ApiError.BadRequest(
        `Wifi module with ${title} title already exists`
      );
    }

    await WifiModule.create({
      title,
      generation,
      cost,
    });
  }

  async getAllWifiModules() {
    return await WifiModule.findAll();
  }

  async getWifiModuleById(wifiId) {
    const wifiModule = await WifiModule.findByPk(wifiId);

    if (!wifiModule) {
      throw ApiError.BadRequest("There are no wifi modules with such id");
    }

    return new WifiModuleOut(wifiModule);
  }

  async update(wifiId, wifi) {
    const wifiModule = await WifiModule.findByPk(wifiId);
    if (!wifiModule) {
      throw ApiError.BadRequest("Wifi module not found");
    }

    const wifiModuleTitleCheck = await wifiModule.findOne({
      where: { title: wifi.title },
    });

    if (wifiModuleTitleCheck && wifiModuleTitleCheck.id !== wifiModule.id) {
      throw ApiError.BadRequest(
        `Wifi module with title "${wifi.title}" already exists`
      );
    }
    wifiModule.title = wifi.title;
    wifiModule.generation = wifi.generation;
    wifiModule.cost = wifi.cost;

    return wifiModule.save();
  }

  async delete(id) {
    const wifiModule = await WifiModule.findByPk(id);
    if (!wifiModule) {
      throw ApiError.BadRequest("Wifi module not found");
    }
    return await wifiModule.destroy();
  }
}

module.exports = new wifiModuleService();
