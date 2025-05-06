module.exports = class WaterCoolingSystemUpdate {
  title;
  cost;
  type_size;
  heat_removal;
  image;
  description;
  constructor(waterCoolingSystem) {
    this.cost = waterCoolingSystem.cost;
    this.title = waterCoolingSystem.title;
    this.image = waterCoolingSystem.image;
    this.description = waterCoolingSystem.description;
    this.type_size = waterCoolingSystem.type_size;
    this.heat_removal = waterCoolingSystem.heat_removal;
  }
};
