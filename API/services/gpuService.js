const { GPU } = require("../Entity");
const gpuOut = require("../models/out/gpu/gpuOut");
const ApiError = require("../exeptions/api-error");
const components = require("../types/componentTypes");
const { Op } = require("sequelize");

const GPU_VRAM_TYPE = components.GPUvram;
const reverseGpuvram = components.invertMap(GPU_VRAM_TYPE);

class GpuService {
  async create(gpuData) {
    const existingGpu = await GPU.findOne({
      where: { title: gpuData.title },
    });

    if (existingGpu) {
      throw ApiError.BadRequest(
        `GPU with title "${gpuData.title}" already exists`
      );
    }

    const vram_type = GPU_VRAM_TYPE.get(gpuData.vram_type);
    if (!vram_type) {
      throw ApiError.BadRequest(
        `Unknown VRAM type: ${gpuData.vram_type},variant:${GPU_VRAM_TYPE}`
      );
    }

    await GPU.create({
      ...gpuData,
      vram_type,
    });
  }

  async getAllGpus({ page, limit, search, cost }) {
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

    const { count, rows } = await GPU.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(count / newLimit);
    return {
      meta: { count, totalPages },
      data: rows.map((gpu) => {
        const gpuObj = gpu.toJSON();
        gpuObj.vram_type = reverseGpuvram.get(gpuObj.vram_type);
        return new gpuOut(gpuObj);
      }),
    };
  }

  async getGpuById(gpuId) {
    const gpu = await GPU.findByPk(gpuId);

    if (!gpu) {
      throw ApiError.BadRequest("GPU with such ID not found");
    }

    const gpuObj = gpu.toJSON();
    gpuObj.vram_type = reverseGpuvram.get(gpuObj.vram_type);
    return new gpuOut(gpuObj);
  }

  async update(gpuId, gpuData) {
    const gpu = await GPU.findByPk(gpuId);
    if (!gpu) {
      throw ApiError.BadRequest("GPU not found");
    }

    const gpuTitleCheck = await GPU.findOne({
      where: { title: gpuData.title },
    });
    if (gpuTitleCheck && gpuTitleCheck.id !== gpu.id) {
      throw ApiError.BadRequest(
        `GPU with title "${gpuData.title}" already exists`
      );
    }

    const vram_type = GPU_VRAM_TYPE.get(gpuData.vram_type);
    if (!vram_type) {
      throw ApiError.BadRequest(`Unknown VRAM type: ${gpuData.vram_type}`);
    }

    gpu.set({
      ...gpuData,
      vram_type,
    });
    return await gpu.save();
  }

  async delete(gpuId) {
    const gpu = await GPU.findByPk(gpuId);
    if (!gpu) {
      throw ApiError.BadRequest("GPU not found");
    }
    return await gpu.destroy();
  }
}

module.exports = new GpuService();
