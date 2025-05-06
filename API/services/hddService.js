const { HDD } = require("../Entity");
const hddOut = require("../models/out/hdd/hddOut");
const ApiError = require("../exeptions/api-error");
const { Op } = require("sequelize");

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

  async getAllHdds({ page, limit, search, cost }) {
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

    const { count, rows } = await HDD.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((hdd) => {
        const hddObj = hdd.toJSON();
        return new hddOut(hddObj);
      }),
    };
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
