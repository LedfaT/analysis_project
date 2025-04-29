const { HDD } = require("../Entity");
const hddOut = require("../models/out/hdd/hddOut");
const ApiError = require("../exeptions/api-error");

class HddService {
  async create(hddData) {
    const existingHdd = await HDD.findOne({
      where: { title: hddData.title },
    });

    if (existingHdd) {
      throw ApiError.BadRequest(
        `HDD with title "${hddData.title}" already exists`
      );
    }

    await HDD.create(hddData);
  }

  async getAllHdds() {
    const hdds = await HDD.findAll();
    return hdds.map((hdd) => new hddOut(hdd.toJSON()));
  }

  async getHddById(hddId) {
    const hdd = await HDD.findByPk(hddId);

    if (!hdd) {
      throw ApiError.BadRequest("HDD with such ID not found");
    }

    return new hddOut(hdd.toJSON());
  }

  async update(hddId, hddData) {
    const hdd = await HDD.findByPk(hddId);
    if (!hdd) {
      throw ApiError.BadRequest("HDD not found");
    }

    const hddTitleCheck = await HDD.findOne({
      where: { title: hddData.title },
    });
    if (hddTitleCheck && hddTitleCheck.id !== hdd.id) {
      throw ApiError.BadRequest(
        `HDD with title "${hddData.title}" already exists`
      );
    }

    hdd.set(hddData);
    return await hdd.save();
  }

  async delete(hddId) {
    const hdd = await HDD.findByPk(hddId);
    if (!hdd) {
      throw ApiError.BadRequest("HDD not found");
    }
    return await hdd.destroy();
  }
}

module.exports = new HddService();
