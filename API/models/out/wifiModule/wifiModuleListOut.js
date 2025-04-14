module.exports = class wifiModuleListOut {
  id;
  title;
  generation;
  cost;
  constructor(wifi) {
    this.id = wifi.id;
    this.cost = wifi.cost;
    this.generation = wifi.generation;
    this.title = wifi.title;
  }
};
