module.exports = class GpuUpdate {
  id;
  title;
  cores;
  cost;
  threads;
  vram_quantity;
  cache;
  clock;
  vram_type;
  createdAt;
  updatedAt;
  constructor(gpu) {
    this.id = gpu.id;
    this.cost = gpu.cost;
    this.cores = gpu.cores;
    this.title = gpu.title;
    this.threads = gpu.threads;
    this.vram_quantity = gpu.vram_quantity;
    this.cache = gpu.cache;
    this.clock = gpu.clock;
    this.vram_type = gpu.vram_type;
    this.createdAt = gpu.createdAt;
    this.updatedAt = gpu.updatedAt;
  }
};
