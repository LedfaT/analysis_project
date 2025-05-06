const { WaterCoolingSystem } = require("../Entity");
const waterCoolingOut = require("../models/out/waterCoolingSystem/waterCoolingSystemOut");
const ApiError = require("../exeptions/api-error");
const components = require("../types/componentTypes");
const { Op } = require("sequelize");

const WATER_COOLING_TYPE_SIZE = components.waterCoolingTypeSize;
const reverseWaterCoolingTypeSize = components.invertMap(
  WATER_COOLING_TYPE_SIZE
);

class WaterCoolingSystemService {
  async create(waterCoolingData) {
    const existingSystem = await WaterCoolingSystem.findOne({
      where: { title: waterCoolingData.title },
    });

    if (existingSystem) {
      throw ApiError.BadRequest(
        `Water Cooling System with title "${waterCoolingData.title}" already exists`
      );
    }

    const type_size = WATER_COOLING_TYPE_SIZE.get(waterCoolingData.type_size);
    if (!type_size) {
      throw ApiError.BadRequest(
        `Unknown type size: ${waterCoolingData.type_size}`
      );
    }

    await WaterCoolingSystem.create({
      ...waterCoolingData,
      type_size,
    });
  }

  async getAllSystems({ page, limit, search, cost }) {
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

    const { count, rows } = await WaterCoolingSystem.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((system) => {
        const systemObj = system.toJSON();
        systemObj.type_size = reverseWaterCoolingTypeSize.get(
          systemObj.type_size
        );
        return new waterCoolingOut(systemObj);
      }),
    };
  }

  async getSystemById(systemId) {
    const system = await WaterCoolingSystem.findByPk(systemId);

    if (!system) {
      throw ApiError.BadRequest("Water Cooling System with such ID not found");
    }

    const systemObj = system.toJSON();
    systemObj.type_size = reverseWaterCoolingTypeSize.get(systemObj.type_size);
    return new waterCoolingOut(systemObj);
  }

  async update(systemId, waterCoolingData) {
    const system = await WaterCoolingSystem.findByPk(systemId);
    if (!system) {
      throw ApiError.BadRequest("Water Cooling System not found");
    }

    const systemTitleCheck = await WaterCoolingSystem.findOne({
      where: { title: waterCoolingData.title },
    });
    if (systemTitleCheck && systemTitleCheck.id !== system.id) {
      throw ApiError.BadRequest(
        `Water Cooling System with title "${waterCoolingData.title}" already exists`
      );
    }

    const type_size = WATER_COOLING_TYPE_SIZE.get(waterCoolingData.type_size);
    if (!type_size) {
      throw ApiError.BadRequest(
        `Unknown type size: ${waterCoolingData.type_size}`
      );
    }

    system.set({
      ...waterCoolingData,
      type_size,
    });
    return await system.save();
  }

  async delete(systemId) {
    const system = await WaterCoolingSystem.findByPk(systemId);
    if (!system) {
      throw ApiError.BadRequest("Water Cooling System not found");
    }
    return await system.destroy();
  }
}

module.exports = new WaterCoolingSystemService();
