module.exports = class WifiModuleCreate {
  title;
  generation;
  cost;
  image;
  description;
  constructor(wifi) {
    this.cost = wifi.cost;
    this.description = wifi.description;
    this.image = wifi.image;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
};
