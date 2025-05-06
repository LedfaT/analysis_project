const { RAM } = require("../Entity");
const ramOut = require("../models/out/ram/ramOut");
const ApiError = require("../exeptions/api-error");
const components = require("../types/componentTypes");
const { Op } = require("sequelize");

const RAM_MEMORY_TYPE = components.RAMmemType;
const RAM_RADIATOR_TYPE = components.RAMradiatorType;
const reverseRamMemoryType = components.invertMap(RAM_MEMORY_TYPE);
const reverseRamRadiatorType = components.invertMap(RAM_RADIATOR_TYPE);

class RamService {
  async create(ramData) {
    const existingRAM = await RAM.findOne({
      where: { title: ramData.title },
    });

    if (existingRAM) {
      throw ApiError.BadRequest(`RAM "${ramData.title}" already exists`);
    }

    const memory_type = RAM_MEMORY_TYPE.get(ramData.memory_type);
    if (!memory_type) {
      throw ApiError.BadRequest(`Unknown memory type: ${ramData.memory_type}`);
    }

    const radiator_type = RAM_RADIATOR_TYPE.get(ramData.radiator_type);
    if (!radiator_type) {
      throw ApiError.BadRequest(
        `Unknown radiator type: ${ramData.radiator_type}`
      );
    }

    await RAM.create({
      ...ramData,
      memory_type,
      radiator_type,
    });
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

    const { count, rows } = await RAM.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((ram) => {
        const ramObj = ram.toJSON();
        ramObj.memory_type = reverseRamMemoryType.get(ramObj.memory_type);
        ramObj.radiator_type = reverseRamRadiatorType.get(ramObj.radiator_type);
        return new ramOut(ramObj);
      }),
    };
  }

  async getById(id) {
    const ram = await RAM.findByPk(id);
    if (!ram) {
      throw ApiError.BadRequest("RAM not found");
    }

    const obj = ram.toJSON();
    obj.memory_type = reverseRamMemoryType.get(obj.memory_type);
    obj.radiator_type = reverseRamRadiatorType.get(obj.radiator_type);

    return new ramOut(obj);
  }

  async update(id, ramData) {
    const ram = await RAM.findByPk(id);
    if (!ram) {
      throw ApiError.BadRequest("RAM not found");
    }

    const titleCheck = await RAM.findOne({
      where: { title: ramData.title },
    });
    if (titleCheck && titleCheck.id !== ram.id) {
      throw ApiError.BadRequest(
        `RAM with title "${ramData.title}" already exists`
      );
    }

    const memory_type = RAM_MEMORY_TYPE.get(ramData.memory_type);
    if (!memory_type) {
      throw ApiError.BadRequest(`Unknown memory type: ${ramData.memory_type}`);
    }

    let radiator_type = RAM_RADIATOR_TYPE.get(ramData.radiator_type);
    if (!radiator_type) {
      throw ApiError.BadRequest(
        `Unknown radiator type: ${ramData.radiator_type}`
      );
    }

    ram.set({
      ...ramData,
      memory_type,
      radiator_type,
    });

    return await ram.save();
  }

  async delete(id) {
    const ram = await RAM.findByPk(id);
    if (!ram) {
      throw ApiError.BadRequest("RAM not found");
    }
    return await ram.destroy();
  }
}

module.exports = new RamService();
