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
    console.log("heelloasd");
    const bluetoothModule = await BluetoothModule.findByPk(BmId);

    if (!bluetoothModule) {
      throw ApiError.BadRequest("There are no bluetooth modules with such id");
    }

    return new BluetoothModuleOut(bluetoothModule);
  }
}

module.exports = new bluetoothModuleService();
