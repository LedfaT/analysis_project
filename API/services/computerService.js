const { Computer } = require("../Entity");
const ComputerOut = require("../models/out/computer/computerOut");
const ApiError = require("../exeptions/api-error");

const AutoMapperService = require("./autoMapperService");

class ComputerService {
  async create(computerData) {
    await Computer.create({ ...computerData });
  }

  async getAllUserComputers(userId) {
    const computers = await Computer.findAll({
      where: {
        user_id: userId,
      },
      include: [
        "User",
        "BluetoothModule",
        "Tower",
        "CoolingSystem",
        "CPU",
        "GPU",
        "HDD",
        "Motherboard",
        "PowerSupply",
        "RAM",
        "SSD",
        "WaterCoolingSystem",
        "WifiModule",
      ],
    });

    if (computers.length === 0) {
      throw ApiError.notFound("No computers found");
    }

    return computers.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });
  }

  async userComputersCount(userId) {
    const computers = await Computer.findAll({
      where: {
        user_id: userId,
      },
    });

    return computers;
  }

  async getAllComputers() {
    const computers = await Computer.findAll({
      include: [
        "User",
        "BluetoothModule",
        "Tower",
        "CoolingSystem",
        "CPU",
        "GPU",
        "HDD",
        "Motherboard",
        "PowerSupply",
        "RAM",
        "SSD",
        "WaterCoolingSystem",
        "WifiModule",
      ],
    });

    return computers.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });
  }

  async adminPublicComputersList() {
    const computers = await Computer.findAll({
      where: {
        isPublished: true,
        user_role: "ADMIN",
      },
      include: [
        "User",
        "BluetoothModule",
        "Tower",
        "CoolingSystem",
        "CPU",
        "GPU",
        "HDD",
        "Motherboard",
        "PowerSupply",
        "RAM",
        "SSD",
        "WaterCoolingSystem",
        "WifiModule",
      ],
    });

    return computers.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });
  }

  async getUserPublicComputers() {
    const computers = await Computer.findAll({
      where: {
        isPublished: true,
        user_role: "USER",
      },
      include: [
        "User",
        "BluetoothModule",
        "Tower",
        "CoolingSystem",
        "CPU",
        "GPU",
        "HDD",
        "Motherboard",
        "PowerSupply",
        "RAM",
        "SSD",
        "WaterCoolingSystem",
        "WifiModule",
      ],
    });

    return computers.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });
  }

  async getComputerById(id) {
    const computer = await Computer.findByPk(id, {
      include: [
        "User",
        "BluetoothModule",
        "Tower",
        "CoolingSystem",
        "CPU",
        "GPU",
        "HDD",
        "Motherboard",
        "PowerSupply",
        "RAM",
        "SSD",
        "WaterCoolingSystem",
        "WifiModule",
      ],
    });

    if (!computer) {
      throw ApiError.BadRequest("Computer not found");
    }
    const computerOut = new ComputerOut(computer.toJSON());
    return AutoMapperService.computers(computerOut);
  }

  async update(id, data) {
    const computer = await Computer.findByPk(id);
    if (!computer) {
      throw ApiError.BadRequest("Computer not found");
    }

    computer.set({ ...data });
    await computer.save();
  }

  async delete(id) {
    const computer = await Computer.findByPk(id);
    if (!computer) {
      throw ApiError.BadRequest("Computer not found");
    }
    return await computer.destroy();
  }
}

module.exports = new ComputerService();
