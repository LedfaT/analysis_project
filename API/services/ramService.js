const { RAM } = require("../Entity");
const ramOut = require("../models/out/ram/ramOut");
const ApiError = require("../exeptions/api-error");

class RamService {
  async create(ramData) {
    const existingRAM = await RAM.findOne({
      where: { title: ramData.title },
    });

    if (existingRAM) {
      throw ApiError.BadRequest(`RAM "${ramData.title}" already exists`);
    }

    const memory_type = ramMemoryType.get(ramData.memory_type);
    if (!memory_type) {
      throw ApiError.BadRequest(`Unknown memory type: ${ramData.memory_type}`);
    }

    let radiator_type = null;
    if (ramData.radiator_type !== undefined && ramData.radiator_type !== null) {
      radiator_type = ramRadiatorType.get(ramData.radiator_type);
      if (!radiator_type) {
        throw ApiError.BadRequest(
          `Unknown radiator type: ${ramData.radiator_type}`
        );
      }
    }

    await RAM.create({
      ...ramData,
      memory_type,
      radiator_type,
    });
  }

  async getAll() {
    const rams = await RAM.findAll();
    return rams.map((ram) => {
      const obj = ram.toJSON();
      obj.memory_type = reverseRamMemoryType.get(obj.memory_type);
      obj.radiator_type =
        obj.radiator_type !== null
          ? reverseRamRadiatorType.get(obj.radiator_type)
          : null;
      return new ramOut(obj);
    });
  }

  async getById(id) {
    const ram = await RAM.findByPk(id);
    if (!ram) {
      throw ApiError.BadRequest("RAM not found");
    }

    const obj = ram.toJSON();
    obj.memory_type = reverseRamMemoryType.get(obj.memory_type);
    obj.radiator_type =
      obj.radiator_type !== null
        ? reverseRamRadiatorType.get(obj.radiator_type)
        : null;
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

    const memory_type = ramMemoryType.get(ramData.memory_type);
    if (!memory_type) {
      throw ApiError.BadRequest(`Unknown memory type: ${ramData.memory_type}`);
    }

    let radiator_type = null;
    if (ramData.radiator_type !== undefined && ramData.radiator_type !== null) {
      radiator_type = ramRadiatorType.get(ramData.radiator_type);
      if (!radiator_type) {
        throw ApiError.BadRequest(
          `Unknown radiator type: ${ramData.radiator_type}`
        );
      }
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
