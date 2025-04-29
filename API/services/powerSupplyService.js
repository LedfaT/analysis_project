const { PowerSupply } = require("../Entity");
const PowerSupplyOut = require("../models/out/powerSupply/powerSupplyOut");
const ApiError = require("../exeptions/api-error");

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

  async getAll() {
    const supplies = await PowerSupply.findAll();
    return supplies.map((supply) => new PowerSupplyOut(supply.toJSON()));
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
