const ApiError = require("../exeptions/api-error");
const TowerService = require("../services/towerService");
const TowerCreate = require("../models/in/tower/towerCreate");
const TowerUpdate = require("../models/in/tower/towerUpdate");

class TowerController {
  async createTower(req, res, next) {
    try {
      const newTower = new TowerCreate(req.body);
      await TowerService.create(newTower);
      res.json({ message: "Tower created successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getTower(req, res, next) {
    try {
      const { id } = req.params;
      const tower = await TowerService.getTowerById(id);
      return res.json(tower);
    } catch (e) {
      next(e);
    }
  }

  async updateTower(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTower = new TowerUpdate(req.body);
      await TowerService.update(id, updatedTower);
      res.json({ message: "Tower updated successfully" });
    } catch (e) {
      next(e);
    }
  }

  async deleteTower(req, res, next) {
    try {
      const { id } = req.params;
      await TowerService.delete(id);
      res.json({ message: "Tower deleted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async getAllTowers(req, res, next) {
    try {
      const towers = await TowerService.getAllTowers();
      res.json(towers);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TowerController();
