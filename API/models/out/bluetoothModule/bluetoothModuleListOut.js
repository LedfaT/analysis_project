module.exports = class BluetoothModuleOut {
  id;
  title;
  generation;
  cost;
  createdAt;
  updatedAt;
  constructor(bluetooth) {
    this.id = bluetooth.id;
    this.cost = bluetooth.cost;
    this.generation = bluetooth.generation;
    this.title = bluetooth.title;
    this.createdAt = bluetooth.createdAt;
    this.updatedAt = bluetooth.updatedAt;
  }
};
