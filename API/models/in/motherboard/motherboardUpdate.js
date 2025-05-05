module.exports = class motherboardUpdate {
  title;
  chipset;
  cost;
  type_size;
  socket;
  constructor(motherboard) {
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.description = motherboard.description;
    this.title = motherboard.title;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
  }
};
