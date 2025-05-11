const ComputerService = require("../services/computerService");
const ApiError = require("../exeptions/api-error");

class ComputerController {
  async getAllComputers(req, res, next) {
    try {
      const computers = await ComputerService.getAllComputers();

      return res.json(computers);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async getAllUserComputers(req, res, next) {
    try {
      const { userId } = req.user;
      const computers = await ComputerService.getAllUserComputers(userId);

      return res.json(computers);
    } catch (error) {
      next(error);
    }
  }

  async getAllUserComputersCount(req, res, next) {
    try {
      const { id } = req.user;

      const computers = await ComputerService.userComputersCount(id);

      return res.json(computers.length);
    } catch (error) {
      next(error);
    }
  }

  async getAdminPublicComputers(req, res, next) {
    try {
      const computers = await ComputerService.adminPublicCompuresList();

      return res.json(computers);
    } catch (error) {
      next(error);
    }
  }

  async getUserPublicComputers(req, res, next) {
    try {
      const computers = await ComputerService.userPublicCompuresList();

      return res.json(computers);
    } catch (error) {
      next(error);
    }
  }

  async getComputerById(req, res, next) {
    try {
      const { id } = req.params;
      const computer = await ComputerService.getComputerById(id);

      return res.json(computer);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async createComputer(req, res, next) {
    try {
      const computerData = { ...req.body, user_id: req.user.id };

      await ComputerService.create(computerData);
      res.json({ message: "Computer created successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async updateComputer(req, res, next) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      await ComputerService.update(id, updateData);
      res.json({ message: "Computer updated successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  async deleteComputer(req, res, next) {
    try {
      const { id } = req.params;
      await ComputerService.delete(id);
      res.json({ message: "Computer deleted successfully" });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = new ComputerController();
