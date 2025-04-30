class ComponentType {
  constructor() {
    this.GPUvram = new Map([
      ["GDDR6", 1],
      ["GDDR6x", 2],
      ["GDDR7", 3],
    ]);

    this.motherboardTypeSize = new Map([
      ["ATX", 1],
      ["Micro-ATX", 2],
      ["Mini-ITX", 3],
    ]);

    this.RAMmemType = new Map([
      ["DDR3", 1],
      ["DDR4", 2],
      ["DDR5", 3],
    ]);

    this.RAMradiatorType = new Map([
      ["None", 1],
      ["Aluminium", 2],
      ["Fan", 3],
    ]);

    this.SSDRadiatorType = new Map([
      ["None", 1],
      ["Aluminium", 2],
      ["Fan", 3],
    ]);

    this.waterCoolingTypeSize = new Map([
      ["280mm", 1],
      ["360mm", 2],
      ["240mm", 3],
    ]);

    this.coolingSystemTypeSize = new Map([
      ["280mm", 1],
      ["360mm", 2],
      ["240mm", 3],
    ]);

    this.fanCoolingTypeSize = new Map([
      ["Dual Tower", 1],
      ["Single Tower", 2],
      ["Low-profile Tower", 3],
    ]);

    this.towerTypeSize = new Map([
      ["Full Tower", 1],
      ["Mid Tower", 2],
      ["Mini Tower", 3],
    ]);

    this.towerFanType = new Map([
      ["200mm", 1],
      ["120mm", 2],
      ["92mm", 3],
    ]);
  }

  invertMap(map) {
    return new Map([...map.entries()].map(([key, value]) => [value, key]));
  }
}

module.exports = new ComponentType();
