const { PowerSupply } = require("../Entity");
const PowerSupplyOut = require("../models/out/powerSupply/powerSupplyOut");
const ApiError = require("../exeptions/api-error");
const { Op } = require("sequelize");

class PowerSupplyService {
  async create(data) {
    const existing = await PowerSupply.findOne({
      where: { title: data.title },
    });
    if (existing) {
      throw ApiError.BadRequest(
        `Power supply with title "${data.title}" already exists`
      );
    }

    await PowerSupply.create({ ...data });
  }

  async getAll({ page, limit, search, cost }) {
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

    const { count, rows } = await PowerSupply.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((powerSupply) => {
        const powerSupplyObj = powerSupply.toJSON();

        return new PowerSupplyOut(powerSupplyObj);
      }),
    };
  }

  async getById(id) {
    const supply = await PowerSupply.findByPk(id);

    if (!supply) {
      throw ApiError.BadRequest("Power supply not found");
    }

    return new PowerSupplyOut(supply.toJSON());
  }

  async update(id, data) {
    const supply = await PowerSupply.findByPk(id);
    if (!supply) {
      throw ApiError.BadRequest("Power supply not found");
    }

    const titleCheck = await PowerSupply.findOne({
      where: { title: data.title },
    });
    if (titleCheck && titleCheck.id !== item.id) {
      throw ApiError.BadRequest(
        `Power supply with title "${data.title}" already exists`
      );
    }

    supply.set({ ...data });
    return await supply.save();
  }

  async delete(id) {
    const supply = await PowerSupply.findByPk(id);
    if (!supply) {
      throw ApiError.BadRequest("Power supply not found");
    }

    return await supply.destroy();
  }
}

module.exports = new PowerSupplyService();
