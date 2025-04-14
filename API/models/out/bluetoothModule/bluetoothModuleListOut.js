module.exports = class BluetoothModuleListOut {
  id;
  title;
  generation;
  cost;
  constructor(bluetooth) {
    this.id = bluetooth.id;
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
  }
};
