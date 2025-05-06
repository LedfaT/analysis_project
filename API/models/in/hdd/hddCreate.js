module.exports = class HddCreate {
  title;
  memory_quantity;
  cost;
  reading_speed;
  write_speed;
  image;
  description;
  constructor(hdd) {
    this.cost = hdd.cost;
    this.memory_quantity = hdd.memory_quantity;
    this.description = hdd.description;
    this.title = hdd.title;
    this.reading_speed = hdd.reading_speed;
    this.write_speed = hdd.write_speed;
  }
};
