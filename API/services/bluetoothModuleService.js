const { BluetoothModule } = require("../Entity");
const BluetoothModuleOut = require("../models/out/bluetoothModule/bluetoothModuleOut");
const ApiError = require("../exeptions/api-error");

class BluetoothModuleService {
  async create(bluetooth) {
    const bluetoothModule = await BluetoothModule.findOne({
      where: { title: bluetooth.title },
    });

    if (bluetoothModule) {
      throw ApiError.BadRequest(
        `Bluetooth module with ${bluetooth.title} title already exists`
      );
    }

    await BluetoothModule.create({ ...bluetooth });
  }

  async getAllBluetoothModules({ page, limit, search }) {
    const newPage = parseInt(page) || 1;
    const newLimit = parseInt(page) || 12;
    const offset = (newPage - 1) * newLimit;

    const where = search
      ? {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        }
      : {};

    const { count, rows } = await BluetoothModule.findAndCountAll({
      where,
      offset,
      limit: newLimit,
    });

    const totalPages = Math.ceil(total / 12);
    return {
      meta: { count, totalPages },
      data: rows.map((bluetooth) => new BluetoothModuleOut(bluetooth)),
    };
  }

  async getBluetoothModuleById(BmId) {
    const bluetoothModule = await BluetoothModule.findByPk(BmId);

    if (!bluetoothModule) {
      throw ApiError.BadRequest("There are no bluetooth modules with such id");
    }

    return new BluetoothModuleOut(bluetoothModule);
  }

  async update(BmId, Bm) {
    const bluetoothModule = await BluetoothModule.findByPk(BmId);
    if (!bluetoothModule) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }

    const bluetoothModuleTitleCheck = await BluetoothModule.findOne({
      where: { title: Bm.title },
    });
    if (
      bluetoothModuleTitleCheck &&
      bluetoothModuleTitleCheck.id !== bluetoothModule.id
    ) {
      throw ApiError.BadRequest(
        `Bluetooth module with title "${Bm.title}" already exists`
      );
    }

    bluetoothModule.set({ ...Bm });
    return bluetoothModule.save();
  }

  async delete(id) {
    const bluetoothModule = await BluetoothModule.findByPk(id);
    if (!bluetoothModule) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }
    return await bluetoothModule.destroy();
  }
}

module.exports = new BluetoothModuleService();
