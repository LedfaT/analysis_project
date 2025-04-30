const components = require("../types/componentTypes");
const BluetoothModuleListOut = require("../models/out/bluetoothModule/bluetoothModuleListOut");
const CoolingSystemListOut = require("../models/out/coolingSystem/coolingSystemListOut");
const CpuListOut = require("../models/out/cpu/cpuListOut");
const GpuListOut = require("../models/out/gpu/gpuListOut");
const HddListOut = require("../models/out/hdd/hddListOut");
const MotherboardListOut = require("../models/out/motherboard/motherboardListOut");
const PowerSupplyListOut = require("../models/out/powerSupply/powerSupplyListOut");
const RamListOut = require("../models/out/ram/ramListOut");
const SsdListOut = require("../models/out/ssd/ssdListOut");
const TowerListOut = require("../models/out/tower/towerListOut");
const WaterCoolingSystemListOut = require("../models/out/waterCoolingSystem/waterCoolingSystemListOut");
const WifiModuleListOut = require("../models/out/wifiModule/wifiModuleListOut");
const SsdListOut = require("../models/out/ssd/ssdListOut");

const TYPE_SIZE = components.coolingSystemTypeSize;
const GPU_VRAM_TYPE = components.GPUvram;
const RAM_MEMORY_TYPE = components.RAMmemType;
const RAM_RADIATOR_TYPE = components.RAMradiatorType;
const TYPE_SIZE_MOTHERBOARD = components.motherboardTypeSize;
const SSD_RADIATOR_TYPE = components.SSDRadiatorType;
const TOWER_TYPE_SIZE = components.towerTypeSize;
const TOWER_FAN_TYPE = components.towerFanType;
const WATER_COOLING_TYPE_SIZE = components.waterCoolingTypeSize;
const reverseGpuvram = components.invertMap(GPU_VRAM_TYPE);
const reversedTypeSizeMotherboard = components.invertMap(TYPE_SIZE_MOTHERBOARD);
const reversedTypeSize = components.invertMap(TYPE_SIZE);
const reverseRamMemoryType = components.invertMap(RAM_MEMORY_TYPE);
const reverseRamRadiatorType = components.invertMap(RAM_RADIATOR_TYPE);
const reverseSsdRadiator = components.invertMap(SSD_RADIATOR_TYPE);
const reverseTowerTypeSize = components.invertMap(TOWER_TYPE_SIZE);
const reverseTowerFanType = components.invertMap(TOWER_FAN_TYPE);
const reverseWaterCoolingTypeSize = components.invertMap(
  WATER_COOLING_TYPE_SIZE
);
module.exports = class AutoMapperService {
  static computerMap(computers) {
    computers.forEach((computer) => {
      computer.bluetooth_module = new BluetoothModuleListOut(
        computer.bluetooth_module
      );

      computer.tower = new TowerListOut(computer.tower);

      computer.cooling_system = new CoolingSystemListOut(
        computer.cooling_system
      );

      computer.cpu = new CpuListOut(computer.cpu);

      computer.gpu - new GpuListOut(computer.gpu);

      // computer.hdd =
    });
  }
};
