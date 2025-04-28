const ApiError = require("../exeptions/api-error");
const SsdService = require("../services/ssdService");
const SsdCreate = require("../models/in/ssd/ssdCreate");
const SsdUpdate = require("../models/in/ssd/ssdUpdate");

class SsdController {
  async createSsd(req, res, next) {
    try {
      const newSsd = new SsdCreate(req.body);
      await SsdService.create(newSsd);
      res.json({ message: "SSD created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getSsd(req, res, next) {
    try {
      const { id } = req.params;
      const ssd = await SsdService.getSsdById(id);
      return res.json(ssd);
    } catch (e) {
      next(e);
    }
  }

  async updateSsd(req, res, next) {
    try {
      const { id } = req.params;
      const updatedSsd = new SsdUpdate(req.body);
      await SsdService.update(id, updatedSsd);
      res.json({ message: "SSD updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteSsd(req, res, next) {
    try {
      const { id } = req.params;
      await SsdService.delete(id);
      res.json({ message: "SSD deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllSsds(req, res, next) {
    try {
      const ssds = await SsdService.getAllSsds();
      res.json(ssds);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SsdController();
