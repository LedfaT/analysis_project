const { BluetoothModule } = require("../Entity");
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
}

module.exports = new bluetoothModuleService();
