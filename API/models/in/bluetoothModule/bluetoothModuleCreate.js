module.exports = class BluetoothModuleCreate {
  title;
  generation;
  cost;
  constructor(bluetooth) {
    this.cost = bluetooth.cost;
    this.description = bluetooth.description;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
