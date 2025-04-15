module.exports = class CoolingSystemCreate {
  title;
  heat_removal;
  cost;
  type_size;
  constructor(CoolingSystem) {
    this.id = CoolingSystem.id;
    this.cost = CoolingSystem.cost;
    this.heat_removal = CoolingSystem.heat_removal;
    this.title = CoolingSystem.title;
    this.type_size = CoolingSystem.type_size;
  }
};
