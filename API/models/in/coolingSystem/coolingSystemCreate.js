module.exports = class CoolingSystemCreate {
  title;
  heat_removal;
  cost;
  type_size;
  image
  description
  constructor(CoolingSystem) {
    this.cost = CoolingSystem.cost;
    this.heat_removal = CoolingSystem.heat_removal;
    this.image = CoolingSystem.image;
    this.description = CoolingSystem.description;
    this.title = CoolingSystem.title;
    this.type_size = CoolingSystem.type_size;
  }
};
