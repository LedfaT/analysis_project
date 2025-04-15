module.exports = class BluetoothModuleCreate {
  title;
  generation;
  cost;
  constructor(bluetooth) {
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
