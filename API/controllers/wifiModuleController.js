const WifiModuleService = require("../services/wifiModuleService");
const WifiModuleCreate = require("../models/in/wifiModule/wifiModuleCreate");
const WifiModuleUpdate = require("../models/in/wifiModule/wifiModuleUpdate");

class WifiModuleController {
  async createWifiModule(req, res, next) {
    try {
      const newWifiModule = new WifiModuleCreate(req.body);
      await WifiModuleService.create(newWifiModule);
      res.json({ message: "Wifi module created" });
    } catch (e) {
      next(e);
    }
  }
  async getWifiModule(req, res, next) {
    try {
      const { id } = req.params;
      const wifiModule = await WifiModuleService.getWifiModuleById(id);
      return res.json(wifiModule);
    } catch (e) {
      next(e);
    }
  }
  async updateWifiModule(req, res, next) {
    try {
      const { id } = req.params;
      const updatedWifiModule = new WifiModuleUpdate(req.body);
      await WifiModuleService.update(id, updatedWifiModule);
      res.json({ message: "Wifi module updated" });
    } catch (e) {
      next(e);
    }
  }
  async deleteWifiModule(req, res, next) {
    try {
      const { id } = req.params;
      await WifiModuleService.delete(id);
      res.json({ message: "Wifi module deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
  async getAllWifiModules(req, res, next) {
    try {
      const wifiModules = await WifiModuleService.getAllWifiModules(req.query);
      res.json(wifiModules);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new WifiModuleController();
