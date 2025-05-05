module.exports = class WifiModuleUpdate {
  title;
  generation;
  cost;
  constructor(wifi) {
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.description = wifi.description;
    this.title = wifi.title;
  }
};
