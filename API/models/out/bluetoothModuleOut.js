module.exports = class BluetoothModuleOut {
  title;
  generation;
  cost;
  constructor(bluetooth) {
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
