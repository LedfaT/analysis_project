module.exports = class TowerListOut {
  id;
  title;
  fan_included;
  cost;
  type_size;
  fan_type;
  createdAt;
  updatedAt;
  constructor(tower) {
    this.id = tower.id;
    this.cost = tower.cost;
    this.fan_included = tower.fan_included;
    this.title = tower.title;
    this.type_size = tower.type_size;
    this.fan_type = tower.fan_type;
    this.createdAt = tower.createdAt;
    this.updatedAt = tower.updatedAt;
  }
};
