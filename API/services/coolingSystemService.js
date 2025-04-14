const { CoolingSystem } = require("../Entity");
const CoolingSystemListOut = require("../models/out/coolingSystem/coolingSystemListOut");
const ApiError = require("../exeptions/api-error");

class CoolingSystemService {
  async create(title, heat_removal, type_size, cost) {
    const coolingSystem = await CoolingSystem.findOne({
      where: { title },
    });

    if (coolingSystem) {
      throw ApiError.BadRequest(
        `Cooling system with ${title} title already exists`
      );
    }

    await CoolingSystem.create({
      title,
      heat_removal,
      type_size,
      cost,
    });
  }

  async getAllCoolingSystems() {
    return await CoolingSystem.findAll();
  }

  async getCoolingSystemById(BmId) {
    const coolingSystem = await CoolingSystem.findByPk(BmId);

    if (!coolingSystem) {
      throw ApiError.BadRequest("There are no bluetooth modules with such id");
    }

    return new CoolingSystemListOut(coolingSystem);
  }

  async update(coolingId, cooling) {
    const coolingSystem = await CoolingSystem.findByPk(coolingId);
    if (!coolingSystem) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }

    const coolingSystemTitleCheck = await CoolingSystem.findOne({
      where: { title: cooling.title },
    });

    if (
      coolingSystemTitleCheck &&
      coolingSystemTitleCheck.id !== coolingSystem.id
    ) {
      throw ApiError.BadRequest(
        `Bluetooth module with title "${cooling.title}" already exists`
      );
    }

    coolingSystem.title = cooling.title;
    coolingSystem.heat_removal = cooling.heat_removal;
    coolingSystem.type_size = cooling.type_size;
    coolingSystem.cost = cooling.cost;

    return coolingSystem.save();
  }

  async delete(id) {
    const coolingSystem = await CoolingSystem.findByPk(id);
    if (!coolingSystem) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }
    return await coolingSystem.destroy();
  }
}

module.exports = new CoolingSystemService();
