module.exports = class motherboardUpdate {
  title;
  chipset;
  cost;
  type_size;
  socket;
  image;
  description;
  constructor(motherboard) {
    this.cost = motherboard.cost;
    this.chipset = motherboard.chipset;
    this.description = motherboard.description;
    this.image = motherboard.image;
    this.title = motherboard.title;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
  }
};
