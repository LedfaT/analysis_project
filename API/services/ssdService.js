const { SSD } = require("../Entity");
const ssdOut = require("../models/out/ssd/ssdOut");
const ApiError = require("../exeptions/api-error");
const components = require("../types/componentTypes");

const SSD_RADIATOR_TYPE = components.SSDRadiatorType;
const reverseSsdRadiator = components.invertMap(SSD_RADIATOR_TYPE);

class SsdService {
  async create(ssdData) {
    const existingSsd = await SSD.findOne({
      where: { title: ssdData.title },
    });

    if (existingSsd) {
      throw ApiError.BadRequest(
        `SSD with title "${ssdData.title}" already exists`
      );
    }

    const radiator_type = SSD_RADIATOR_TYPE.get(ssdData.radiator_type);
    if (!radiator_type) {
      throw ApiError.BadRequest(
        `Unknown radiator type: ${ssdData.radiator_type}`
      );
    }

    await SSD.create({
      ...ssdData,
      radiator_type,
    });
  }

  async getAllSsds() {
    const ssds = await SSD.findAll();
    return ssds.map((ssd) => {
      const ssdObj = ssd.toJSON();
      ssdObj.radiator_type = reverseSsdRadiator.get(ssdObj.radiator_type);
      return new ssdOut(ssdObj);
    });
  }

  async getSsdById(ssdId) {
    const ssd = await SSD.findByPk(ssdId);

    if (!ssd) {
      throw ApiError.BadRequest("SSD with such ID not found");
    }

    const ssdObj = ssd.toJSON();
    ssdObj.radiator_type = reverseSsdRadiator.get(ssdObj.radiator_type);
    return new ssdOut(ssdObj);
  }

  async update(ssdId, ssdData) {
    const ssd = await SSD.findByPk(ssdId);
    if (!ssd) {
      throw ApiError.BadRequest("SSD not found");
    }

    const ssdTitleCheck = await SSD.findOne({
      where: { title: ssdData.title },
    });
    if (ssdTitleCheck && ssdTitleCheck.id !== ssd.id) {
      throw ApiError.BadRequest(
        `SSD with title "${ssdData.title}" already exists`
      );
    }

    const radiator_type = SSD_RADIATOR_TYPE.get(ssdData.radiator_type);
    if (!radiator_type) {
      throw ApiError.BadRequest(
        `Unknown radiator type: ${ssdData.radiator_type}`
      );
    }

    ssd.set({
      ...ssdData,
      radiator_type,
    });
    return await ssd.save();
  }

  async delete(ssdId) {
    const ssd = await SSD.findByPk(ssdId);
    if (!ssd) {
      throw ApiError.BadRequest("SSD not found");
    }
    return await ssd.destroy();
  }
}

module.exports = new SsdService();
