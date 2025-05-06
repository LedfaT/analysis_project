module.exports = class BluetoothModuleCreate {
  title;
  generation;
  cost;
  image;
  description;
  constructor(bluetooth) {
    this.cost = bluetooth.cost;
    this.description = bluetooth.description;
    this.image = bluetooth.image;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
