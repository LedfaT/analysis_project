module.exports = class motherboardOut {
  id;
  title;
  chipset;
  cost;
  type_size;
  socket;
  createdAt;
  updatedAt;
  constructor(motherboard) {
    this.id = motherboard.id;
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.title = motherboard.title;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
    this.createdAt = motherboard.createdAt;
    this.updatedAt = motherboard.updatedAt;
  }
};
