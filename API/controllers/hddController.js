const ApiError = require("../exeptions/api-error");
const HddService = require("../services/hddService");
const HddCreate = require("../models/in/hdd/hddCreate");
const HddUpdate = require("../models/in/hdd/hddUpdate");

class HddController {
  async createHdd(req, res, next) {
    try {
      const newHdd = new HddCreate(req.body);
      await HddService.create(newHdd);
      res.json({ message: "HDD created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getHdd(req, res, next) {
    try {
      const { id } = req.params;
      const hdd = await HddService.getHddById(id);
      return res.json(hdd);
    } catch (e) {
      next(e);
    }
  }

  async updateHdd(req, res, next) {
    try {
      const { id } = req.params;
      const updatedHdd = new HddUpdate(req.body);
      await HddService.update(id, updatedHdd);
      res.json({ message: "HDD updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteHdd(req, res, next) {
    try {
      const { id } = req.params;
      await HddService.delete(id);
      res.json({ message: "HDD deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllHdds(req, res, next) {
    try {
      const hdds = await HddService.getAllHdds();
      res.json(hdds);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new HddController();
