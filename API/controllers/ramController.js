const RamService = require("../services/ramService");
const RamCreate = require("../models/in/ram/ramCreate");
const RamUpdate = require("../models/in/ram/ramUpdate");
const ApiError = require("../exeptions/api-error");

class RamController {
  async create(req, res, next) {
    try {
      const newRam = new RamCreate(req.body);
      await RamService.create(newRam);
      return res.status(201).json({ message: "RAM created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAll(req, res, next) {
    try {
      const rams = await RamService.getAll();
      return res.json(rams);
    } catch (e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      const ramId = req.params.id;
      const ram = await RamService.getById(ramId);
      return res.json(ram);
    } catch (e) {
      next(e);
    }
  }

  async update(req, res, next) {
    try {
      const ramId = req.params.id;
      const updatedRam = new RamUpdate(req.body);
      await RamService.update(ramId, updatedRam);
      return res.json({ message: "RAM updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async delete(req, res, next) {
    try {
      const ramId = req.params.id;
      await RamService.delete(ramId);
      return res.json({ message: "RAM deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RamController();
