const { WifiModule } = require("../Entity");
const WifiModuleOut = require("../models/out/wifiModule/wifiModuleOut");
const ApiError = require("../exeptions/api-error");

class wifiModuleService {
  async create(wifi) {
    const wifiModule = await WifiModule.findOne({
      where: { title: wifi.title },
    });

    if (wifiModule) {
      throw ApiError.BadRequest(
        `Wifi module with ${wifi.title} title already exists`
      );
    }

    await WifiModule.create({ ...wifi });
  }

  async getAllWifiModules({ page, limit, search, cost }) {
    const newPage = page || 1;
    const newLimit = limit || 12;
    const offset = (newPage - 1) * newLimit;

    let where = {};
    if (search) {
      where.title = {
        [Op.iLike]: `%${search}%`,
      };
    }

    // if (cost) {
    //   where.cost;
    // }

    const { count, rows } = await WifiModule.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((wifi) => {
        const wifiObj = wifi.toJSON();

        return new WifiModuleOut(wifiObj);
      }),
    };
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

    const wifiModuleTitleCheck = await WifiModule.findOne({
      where: { title: wifi.title },
    });
    if (wifiModuleTitleCheck && wifiModuleTitleCheck.id !== wifiModule.id) {
      throw ApiError.BadRequest(
        `Wifi module with title "${wifi.title}" already exists`
      );
    }
    wifiModule.set({ ...wifi });
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
