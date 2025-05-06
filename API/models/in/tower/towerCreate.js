module.exports = class TowerCreate {
  title;
  fan_included;
  cost;
  type_size;
  fan_type;
  image
  description
  constructor(tower) {
    this.cost = tower.cost;
    this.description = tower.description;
    this.fan_included = tower.fan_included;
    this.image = tower.image;
    this.title = tower.title;
    this.type_size = tower.type_size;
    this.fan_type = tower.fan_type;
  }
};
