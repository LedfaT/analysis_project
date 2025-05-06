module.exports = class CoolingSystemOut {
  id;
  title;
  heat_removal;
  cost;
  type_size;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(CoolingSystem) {
    this.id = CoolingSystem.id;
    this.cost = CoolingSystem.cost;
    this.description = CoolingSystem.description;
    this.image = CoolingSystem.image;
    this.heat_removal = CoolingSystem.heat_removal;
    this.title = CoolingSystem.title;
    this.type_size = CoolingSystem.type_size;
    this.createdAt = CoolingSystem.createdAt;
    this.updatedAt = CoolingSystem.updatedAt;
  }
};
