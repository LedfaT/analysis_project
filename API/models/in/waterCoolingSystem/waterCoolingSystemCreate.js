module.exports = class WaterCoolingSystemCreate {
  title;
  cost;
  type_size;
  heat_removal;
  constructor(waterCoolingSystem) {
    this.cost = waterCoolingSystem.cost;
    this.title = waterCoolingSystem.title;
    this.type_size = waterCoolingSystem.type_size;
    this.heat_removal = waterCoolingSystem.heat_removal;
  }
};
