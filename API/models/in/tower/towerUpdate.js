module.exports = class TowerUpdate {
  title;
  fan_included;
  cost;
  type_size;
  fan_type;
  constructor(tower) {
    this.cost = tower.cost;
    this.fan_included = tower.fan_included;
    this.description = tower.description;
    this.title = tower.title;
    this.type_size = tower.type_size;
    this.fan_type = tower.fan_type;
  }
};
