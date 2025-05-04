const components = require("../types/componentTypes");

const TYPE_SIZE_COOLING = components.coolingSystemTypeSize;
const GPU_VRAM_TYPE = components.GPUvram;
const TYPE_SIZE_MOTHERBOARD = components.motherboardTypeSize;
const RAM_MEMORY_TYPE = components.RAMmemType;
const RAM_RADIATOR_TYPE = components.RAMradiatorType;
const SSD_RADIATOR_TYPE = components.SSDRadiatorType;
const TOWER_TYPE_SIZE = components.towerTypeSize;
const TOWER_FAN_TYPE = components.towerFanType;
const WATER_COOLING_TYPE_SIZE = components.waterCoolingTypeSize;

const reverseWaterCoolingTypeSize = components.invertMap(
  WATER_COOLING_TYPE_SIZE
);
const reverseTowerTypeSize = components.invertMap(TOWER_TYPE_SIZE);
const reverseTowerFanType = components.invertMap(TOWER_FAN_TYPE);
const reverseSsdRadiator = components.invertMap(SSD_RADIATOR_TYPE);
const reversedTypeSizeCooling = components.invertMap(TYPE_SIZE_COOLING);
const reverseGpuvram = components.invertMap(GPU_VRAM_TYPE);
const reversedTypeSizeMotherBoard = components.invertMap(TYPE_SIZE_MOTHERBOARD);
const reverseRamMemoryType = components.invertMap(RAM_MEMORY_TYPE);
const reverseRamRadiatorType = components.invertMap(RAM_RADIATOR_TYPE);
module.exports = class AutoMapperService {
  static computers(computers) {
    const newComputers = computers.forEach((computer) => {
      computer.tower = reverseTowerTypeSize(computer.tower.type_size);

      computer.tower = reverseTowerFanType(computer.tower.fan_type);

      computer.tower = reverseTowerTypeSize(computer.tower.type_size);
      computer.tower = reverseTowerTypeSize(computer.tower.type_size);
    });

    return newComputers;
  }
};
