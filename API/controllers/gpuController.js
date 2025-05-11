const ApiError = require("../exeptions/api-error");
const GpuService = require("../services/gpuService");
const GpuCreate = require("../models/in/gpu/gpuCreate");
const GpuUpdate = require("../models/in/gpu/gpuUpdate");

class GpuController {
  async createGpu(req, res, next) {
    try {
      const newGpu = new GpuCreate(req.body);
      await GpuService.create(newGpu);
      res.json({ message: "GPU created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getGpu(req, res, next) {
    try {
      const { id } = req.params;
      const gpu = await GpuService.getGpuById(id);
      return res.json(gpu);
    } catch (e) {
      next(e);
    }
  }

  async updateGpu(req, res, next) {
    try {
      const { id } = req.params;
      const updatedGpu = new GpuUpdate(req.body);
      await GpuService.update(id, updatedGpu);
      res.json({ message: "GPU updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteGpu(req, res, next) {
    try {
      const { id } = req.params;
      await GpuService.delete(id);
      res.json({ message: "GPU deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllGpus(req, res, next) {
    try {
      const gpus = await GpuService.getAllGpus(req.query);
      res.json(gpus);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new GpuController();
