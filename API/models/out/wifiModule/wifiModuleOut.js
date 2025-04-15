module.exports = class WifiModuleOut {
  id;
  title;
  generation;
  cost;
  createdAt;
  updatedAt;
  constructor(wifi) {
    this.id = wifi.id;
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.title = wifi.title;
    this.createdAt = wifi.createdAt;
    this.updatedAt = wifi.updatedAt;
  }
};
