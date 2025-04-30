module.exports = class GpuUpdate {
  title;
  cores;
  cost;
  threads;
  vram_quantity;
  cache;
  clock;
  vram_type;
  constructor(Gpu) {
    this.cost = Gpu.cost;
    this.cores = Gpu.cores;
    this.title = Gpu.title;
    this.threads = Gpu.threads;
    this.vram_quantity = Gpu.vram_quantity;
    this.cache = Gpu.cache;
    this.clock = Gpu.clock;
    this.vram_type = Gpu.vram_type;
  }
};
