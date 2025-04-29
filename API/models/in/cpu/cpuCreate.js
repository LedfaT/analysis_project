module.exports = class CpuCreate {
  title;
  cores;
  cost;
  threads;
  Architecture;
  cache;
  clock;
  constructor(cpu) {
    this.cost = cpu.cost;
    this.cores = cpu.cores;
    this.title = cpu.title;
    this.threads = cpu.threads;
    this.Architecture = cpu.Architecture;
    this.cache = cpu.cache;
    this.clock = cpu.clock;
  }
};
