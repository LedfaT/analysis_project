const { CPU } = require("../Entity");
const cpuOut = require("../models/out/cpu/cpuOut");
const ApiError = require("../exeptions/api-error");

class CpuService {
  async create(cpuData) {
    const existingCpu = await CPU.findOne({
      where: { title: cpuData.title },
    });

    if (existingCpu) {
      throw ApiError.BadRequest(
        `CPU with title "${cpuData.title}" already exists`
      );
    }

    await CPU.create({ ...cpuData });
  }

  async getAllCpus() {
    const cpus = await CPU.findAll();
    return cpus.map((cpu) => {
      const cpuObj = cpu.toJSON();
      return new cpuOut(cpuObj);
    });
  }

  async getCpuById(cpuId) {
    const cpu = await CPU.findByPk(cpuId);

    if (!cpu) {
      throw ApiError.BadRequest("CPU with such ID not found");
    }

    const cpuObj = cpu.toJSON();
    return new cpuOut(cpuObj);
  }

  async update(cpuId, cpuData) {
    const cpu = await CPU.findByPk(cpuId);
    if (!cpu) {
      throw ApiError.BadRequest("CPU not found");
    }

    const cpuTitleCheck = await CPU.findOne({
      where: { title: cpuData.title },
    });

    if (cpuTitleCheck && cpuTitleCheck.id !== cpu.id) {
      throw ApiError.BadRequest(
        `CPU with title "${cpuData.title}" already exists`
      );
    }

    cpu.set({ ...cpuData });
    return await cpu.save();
  }

  async delete(cpuId) {
    const cpu = await CPU.findByPk(cpuId);
    if (!cpu) {
      throw ApiError.BadRequest("CPU not found");
    }
    return await cpu.destroy();
  }
}

module.exports = new CpuService();
