module.exports = class ComputerCreate {
  description;
  isPublished;
  cost;
  user_id;
  bluetooth_module_id;
  tower_id;
  cooling_system_id;
  cpu_id;
  gpu_id;
  hdd_id;
  motherboard_id;
  power_supply_id;
  ram_id;
  ssd_id;
  water_cooling_system_id;
  wifi_module_id;

  constructor(data) {
    this.description = data.description;
    this.isPublished = data.isPublished;
    this.cost = data.cost;
    this.user_id = data.user_id;
    this.bluetooth_module_id = data.bluetooth_module_id;
    this.tower_id = data.tower_id;
    this.cooling_system_id = data.cooling_system_id;
    this.cpu_id = data.cpu_id;
    this.gpu_id = data.gpu_id;
    this.hdd_id = data.hdd_id;
    this.motherboard_id = data.motherboard_id;
    this.power_supply_id = data.power_supply_id;
    this.ram_id = data.ram_id;
    this.ssd_id = data.ssd_id;
    this.water_cooling_system_id = data.water_cooling_system_id;
    this.wifi_module_id = data.wifi_module_id;
  }
};
