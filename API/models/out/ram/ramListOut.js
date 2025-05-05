module.exports = class RamListOut {
  id;
  title;
  memory_quantity;
  cost;
  memory_type;
  radiator_type;
  createdAt;
  updatedAt;
  constructor(ram) {
    this.id = ram.id;
    this.cost = ram.cost;
    this.memory_quantity = ram.memory_quantity;
    this.title = ram.title;
    this.description = ram.description;
    this.memory_type = ram.memory_type;
    this.radiator_type = ram.radiator_type;
    this.createdAt = ram.createdAt;
    this.updatedAt = ram.updatedAt;
  }
};
