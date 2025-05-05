module.exports = class GpuUpdate {
  title;
  cores;
  cost;
  threads;
  vram_quantity;
  cache;
  clock;
  vram_type;
  constructor(gpu) {
    this.cost = gpu.cost;
    this.cores = gpu.cores;
    this.title = gpu.title;
    this.description = gpu.description;
    this.threads = gpu.threads;
    this.vram_quantity = gpu.vram_quantity;
    this.cache = gpu.cache;
    this.clock = gpu.clock;
    this.vram_type = gpu.vram_type;
  }
};
