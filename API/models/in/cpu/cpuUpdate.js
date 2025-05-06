module.exports = class CpuUpdate {
  title;
  cores;
  cost;
  threads;
  Architecture;
  cache;
  clock;
  image;
  description;
  constructor(cpu) {
    this.cost = cpu.cost;
    this.cores = cpu.cores;
    this.title = cpu.title;
    this.threads = cpu.threads;
    this.image = cpu.image;
    this.description = cpu.description;
    this.Architecture = cpu.Architecture;
    this.cache = cpu.cache;
    this.clock = cpu.clock;
  }
};
