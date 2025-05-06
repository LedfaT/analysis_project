module.exports = class BluetoothModuleUpdate {
  title;
  generation;
  cost;
  description;
  image;
  constructor(bluetooth) {
    this.cost = bluetooth.cost;
    this.description = bluetooth.description;
    this.image = bluetooth.image;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
