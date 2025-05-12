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
  static computers(computer) {
    const newComputer = computer;

    if (computer.tower) {
      newComputer.tower.type_size = reverseTowerTypeSize.get(
        computer.tower.type_size
      );

      newComputer.tower.fan_type = reverseTowerFanType.get(
        computer.tower.fan_type
      );
    }

    if (computer.ssd) {
      newComputer.ssd.radiator_type = reverseSsdRadiator.get(
        computer.ssd.radiator_type
      );
    }

    if (computer.cooling_system) {
      newComputer.cooling_system.type_size = reversedTypeSizeCooling.get(
        computer.cooling_system.type_size
      );
    }

    if (computer.water_cooling_system) {
      newComputer.water_cooling_system.type_size =
        reverseWaterCoolingTypeSize.get(
          computer.water_cooling_system.type_size
        );
    }

    if (computer.gpu) {
      newComputer.gpu.vram_type = reverseGpuvram.get(computer.gpu.vram_type);
    }

    if (computer.motherboard) {
      newComputer.motherboard.type_size = reversedTypeSizeMotherBoard.get(
        computer.motherboard.type_size
      );
    }

    if (computer.ram) {
      newComputer.ram.memory_type = reverseRamMemoryType.get(
        computer.ram.memory_type
      );

      newComputer.ram.radiator_type = reverseRamRadiatorType.get(
        computer.ram.radiator_type
      );
    }

    return newComputer;
  }
};
