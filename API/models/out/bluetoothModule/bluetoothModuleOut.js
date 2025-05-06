module.exports = class BluetoothModuleOut {
  id;
  title;
  generation;
  cost;
  createdAt;
  updatedAt;
  description;
  image;
  constructor(bluetooth) {
    this.id = bluetooth.id;
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.image = bluetooth.image;
    this.description = bluetooth.description;
    this.title = bluetooth.title;
    this.createdAt = bluetooth.createdAt;
    this.updatedAt = bluetooth.updatedAt;
  }
};
