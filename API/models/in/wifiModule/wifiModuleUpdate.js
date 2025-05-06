module.exports = class WifiModuleUpdate {
  title;
  generation;
  cost;
  image;
  description;
  constructor(wifi) {
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.image = wifi.image;
    this.description = wifi.description;
    this.title = wifi.title;
  }
};
