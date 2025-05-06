const MotherboardService = require("../services/motherboardService");
const MotherboardCreate = require("../models/in/motherboard/motherboardCreate");
const MotherboardUpdate = require("../models/in/motherboard/motherboardUpdate");
const ApiError = require("../exeptions/api-error");

class MotherboardController {
  async create(req, res, next) {
    try {
      const newMotherboard = new MotherboardCreate(req.body);
      await MotherboardService.create(newMotherboard);
      res.status(201).json({ message: "Motherboard created successfully" });
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      const motherboards = await MotherboardService.getAll(req.query);
      res.json(motherboards);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;

      const motherboard = await MotherboardService.getById(id);
      res.json(motherboard);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const updateMotherboard = new MotherboardUpdate(req.body);
      await MotherboardService.update(id, updateMotherboard);
      res.json({ message: "Motherboard updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await MotherboardService.delete(id);
      res.json({ message: "Motherboard deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MotherboardController();
