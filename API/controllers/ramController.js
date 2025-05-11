const RamService = require("../services/ramService");
const RamCreate = require("../models/in/ram/ramCreate");
const RamUpdate = require("../models/in/ram/ramUpdate");
const ApiError = require("../exeptions/api-error");

class RamController {
  async createRam(req, res, next) {
    try {
      const newRam = new RamCreate(req.body);
      await RamService.create(newRam);
      return res.status(201).json({ message: "RAM created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllRams(req, res, next) {
    try {
      const rams = await RamService.getAll(req.query);
      return res.json(rams);
    } catch (e) {
      next(e);
    }
  }

  async getRam(req, res, next) {
    try {
      const { id } = req.params;
      const ram = await RamService.getById(id);
      return res.json(ram);
    } catch (e) {
      next(e);
    }
  }

  async updateRam(req, res, next) {
    try {
      const { id } = req.params;
      const updatedRam = new RamUpdate(req.body);
      await RamService.update(id, updatedRam);
      return res.json({ message: "RAM updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteRam(req, res, next) {
    try {
      const { id } = req.params;
      await RamService.delete(id);
      return res.json({ message: "RAM deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RamController();
