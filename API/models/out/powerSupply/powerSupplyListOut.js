module.exports = class PowerSupplyListOut {
  id;
  title;
  strength;
  cost;
  sertificate;
  cost;
  createdAt;
  updatedAt;
  constructor(powerSupply) {
    this.id = powerSupply.id;
    this.cost = powerSupply.cost;
    this.strength = powerSupply.strength;
    this.title = powerSupply.title;
    this.sertificate = powerSupply.sertificate;
    this.description = powerSupply.description;
    this.cost = powerSupply.cost;
    this.createdAt = powerSupply.createdAt;
    this.updatedAt = powerSupply.updatedAt;
  }
};
