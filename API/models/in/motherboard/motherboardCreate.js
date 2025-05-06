module.exports = class motherboardCreate {
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
    this.image = motherboard.image;
    this.description = motherboard.description;
    this.title = motherboard.title;
    this.type_size = motherboard.type_size;
    this.socket = motherboard.socket;
  }
};
