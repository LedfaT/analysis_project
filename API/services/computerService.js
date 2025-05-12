const { Computer } = require("../Entity");
const ComputerOut = require("../models/out/computer/computerOut");
const ApiError = require("../exeptions/api-error");
const { Op } = require("sequelize");

const AutoMapperService = require("./autoMapperService");

class ComputerService {
  async create(computerData) {
    await Computer.create({ ...computerData });
  }

  async getAllUserComputers(userId, { page, limit }) {
    const newPage = page || 1;
    const newLimit = limit || 4;
    const offset = (newPage - 1) * newLimit;

    const { count, rows } = await Computer.findAndCountAll({
      where: {
        user_id: userId,
      },
      include: [
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

    const totalPages = Math.ceil(count / newLimit);
    const computers = rows.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);

      const mapped = AutoMapperService.computers(computerOut);

      return mapped;
    });

    return {
      meta: { count, totalPages },
      data: computers,
    };
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
    const newPage = page || 1;
    const newLimit = limit || 12;
    const offset = (newPage - 1) * newLimit;

    let where = {};
    if (search) {
      where.title = {
        [Op.iLike]: `%${search}%`,
      };
    }
    const { count, rows } = await Computer.findAndCountAll({
      where,
      offset,
      limit: newLimit,
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

    const totalPages = Math.ceil(count / newLimit);
    const computers = rows.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });

    return {
      meta: { count, totalPages },
      data: computers,
    };
  }

  async adminPublicComputers({ page, limit, search, type }) {
    const newPage = page || 1;
    const newLimit = limit || 12;
    const offset = (newPage - 1) * newLimit;

    let where = {};
    if (search) {
      where.title = {
        [Op.iLike]: `%${search}%`,
      };
    }

    if (type) {
      where.type = type;
    }

    where.isPublished = true;

    const { count, rows } = await Computer.findAndCountAll({
      where,
      offset,
      limit: newLimit,
      include: [
        {
          association: "User",
          where: { user_role: "ADMIN" },
        },
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
    const totalPages = Math.ceil(count / newLimit);

    const computers = rows.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });

    return { meta: { count, totalPages }, data: computers };
  }

  async userPublicComputers({ page, limit, search }) {
    const newPage = page || 1;
    const newLimit = limit || 12;
    const offset = (newPage - 1) * newLimit;

    let where = {};
    if (search) {
      where.title = {
        [Op.iLike]: `%${search}%`,
      };
    }
    where.isPublished = true;

    const { count, rows } = await Computer.findAndCountAll({
      where,
      offset,
      limit: newLimit,
      include: [
        {
          association: "User",
          where: { user_role: "USER" },
        },
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

    const totalPages = Math.ceil(count / newLimit);

    const computers = rows.map((comp) => {
      const compObj = comp.toJSON();
      const computerOut = new ComputerOut(compObj);
      return AutoMapperService.computers(computerOut);
    });

    return { meta: { count, totalPages }, data: computers };
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
