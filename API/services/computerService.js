const { Computer } = require("../Entity");
const ComputerOut = require("../models/out/computer/computerOut");
const ApiError = require("../exeptions/api-error");

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
      return new ComputerOut(compObj);
    });
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

    if (computers.length === 0) {
      throw ApiError.notFound("No computers found");
    }

    return computers.map((comp) => {
      const compObj = comp.toJSON();
      return ComputerOut(compObj);
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

    return new ComputerOut(computer.toJSON());
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
