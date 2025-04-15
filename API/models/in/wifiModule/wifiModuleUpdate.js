module.exports = class WifiModuleUpdate {
  title;
  generation;
  cost;
  constructor(wifi) {
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
};
