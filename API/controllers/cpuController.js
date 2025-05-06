const ApiError = require("../exeptions/api-error");
const CpuService = require("../services/cpuService");
const CpuCreate = require("../models/in/cpu/cpuCreate");
const CpuUpdate = require("../models/in/cpu/cpuUpdate");

class CpuController {
  async createCpu(req, res, next) {
    try {
      const newCpu = new CpuCreate(req.body);
      await CpuService.create(newCpu);
      res.json({ message: "CPU created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getCpu(req, res, next) {
    try {
      const { id } = req.params;
      const cpu = await CpuService.getCpuById(id);
      return res.json(cpu);
    } catch (e) {
      next(e);
    }
  }

  async updateCpu(req, res, next) {
    try {
      const { id } = req.params;
      const updatedCpu = new CpuUpdate(req.body);
      await CpuService.update(id, updatedCpu);
      res.json({ message: "CPU updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteCpu(req, res, next) {
    try {
      const { id } = req.params;
      await CpuService.delete(id);
      res.json({ message: "CPU deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllCpus(req, res, next) {
    try {
      const cpus = await CpuService.getAllCpus(req.query);
      res.json(cpus);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new CpuController();
