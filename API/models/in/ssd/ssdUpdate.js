module.exports = class SsdUpdate {
  title;
  memory_quantity;
  cost;
  reading_speed;
  radiator_type;
  write_speed;
  constructor(ssd) {
    this.cost = ssd.cost;
    this.memory_quantity = ssd.memory_quantity;
    this.description = ssd.description;
    this.title = ssd.title;
    this.reading_speed = ssd.reading_speed;
    this.radiator_type = ssd.radiator_type;
    this.write_speed = ssd.write_speed;
  }
};
