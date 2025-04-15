module.exports = class WifiModuleCreate {
  title;
  generation;
  cost;
  constructor(wifi) {
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
};
