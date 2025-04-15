const { CoolingSystem } = require("../Entity");
const CoolingSystemOut = require("../models/out/coolingSystem/coolingSystemOut");
const ApiError = require("../exeptions/api-error");

class CoolingSystemService {
  async create(cooling) {
    const coolingSystem = await CoolingSystem.findOne({
      where: { title: cooling.title },
    });

    if (coolingSystem) {
      throw ApiError.BadRequest(
        `Cooling system with ${cooling.title} title already exists`
      );
    }

    await CoolingSystem.create({
      ...cooling,
    });
  }

  async getAllCoolingSystems() {
    const coolingSystems = await CoolingSystem.findAll();
    return coolingSystems.map((cooling) => new CoolingSystemOut(cooling));
  }

  async getCoolingSystemById(coolingId) {
    const coolingSystem = await CoolingSystem.findByPk(coolingId);

    if (!coolingSystem) {
      throw ApiError.BadRequest("There are no cooling modules with such id");
    }

    return new CoolingSystemOut(coolingSystem);
  }

  async update(coolingId, cooling) {
    const coolingSystem = await CoolingSystem.findByPk(coolingId);
    if (!coolingSystem) {
      throw ApiError.BadRequest("Cooling module not found");
    }

    const coolingSystemTitleCheck = await CoolingSystem.findOne({
      where: { title: cooling.title },
    });

    if (
      coolingSystemTitleCheck &&
      coolingSystemTitleCheck.id !== coolingSystem.id
    ) {
      throw ApiError.BadRequest(
        `Cooling module with title "${cooling.title}" already exists`
      );
    }

    coolingSystem.set({ ...cooling });
    return coolingSystem.save();
  }

  async delete(id) {
    const coolingSystem = await CoolingSystem.findByPk(id);
    if (!coolingSystem) {
      throw ApiError.BadRequest("Cooling module not found");
    }
    return await coolingSystem.destroy();
  }
}

module.exports = new CoolingSystemService();
