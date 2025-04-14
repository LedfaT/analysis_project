const { BluetoothModule } = require("../Entity");
const BluetoothModuleOut = require("../models/out/bluetoothModuleOut");
const ApiError = require("../exeptions/api-error");

class bluetoothModuleService {
  async create(title, generation, cost) {
    const bluetoothModule = await BluetoothModule.findOne({
      where: { title },
    });

    if (bluetoothModule) {
      throw ApiError.BadRequest(
        `Bluetooth module with ${title} title already exists`
      );
    }

    await BluetoothModule.create({
      title,
      generation,
      cost,
    });
  }

  async getAllBluetoothModules() {
    return await BluetoothModule.findAll();
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

    if (bluetoothModuleTitleCheck) {
      throw ApiError.BadRequest(
        `Bluetooth module with title "${Bm.title}" already exists`
      );
    }

    bluetoothModule.title = Bm.title;
    bluetoothModule.generation = Bm.generation;
    bluetoothModule.cost = Bm.cost;

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

module.exports = new bluetoothModuleService();
