module.exports = class WaterCoolingSystemListOut {
  id;
  title;
  cost;
  type_size;
  heat_removal;
  createdAt;
  updatedAt;
  constructor(waterCoolingSystem) {
    this.id = waterCoolingSystem.id;
    this.cost = waterCoolingSystem.cost;
    this.title = waterCoolingSystem.title;
    this.description = waterCoolingSystem.description;
    this.type_size = waterCoolingSystem.type_size;
    this.heat_removal = waterCoolingSystem.heat_removal;
    this.createdAt = waterCoolingSystem.createdAt;
    this.updatedAt = waterCoolingSystem.updatedAt;
  }
};
