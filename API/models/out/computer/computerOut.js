module.exports = class ComputerOut {
  id;
  description;
  isPublished;
  cost;
  user;
  bluetooth_module;
  tower;
  cooling_system;
  cpu;
  gpu;
  hdd;
  motherboard;
  power_supply;
  ram;
  ssd;
  water_cooling_system;
  wifi_module;

  constructor(computer) {
    this.id = computer.id;
    this.description = computer.description;
    this.isPublished = computer.isPublished;
    this.cost = computer.cost;
    this.user = computer.User || null;
    this.bluetooth_module = computer.BluetoothModule || null;
    this.tower = computer.Tower || null;
    this.cooling_system = computer.CoolingSystem || null;
    this.cpu = computer.CPU || null;
    this.gpu = computer.GPU || null;
    this.hdd = computer.HDD || null;
    this.motherboard = computer.Motherboard || null;
    this.power_supply = computer.PowerSupply || null;
    this.ram = computer.RAM || null;
    this.ssd = computer.SSD || null;
    this.water_cooling_system = computer.WaterCoolingSystem || null;
    this.wifi_module = computer.WifiModule || null;
  }
};
