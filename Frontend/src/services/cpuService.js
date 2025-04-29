import $api from "../http";

export default class CpuService {
  static async createCpu(payload) {
    return $api.post("/api/CPU", payload);
  }

  static async getAllCpus() {
    return $api.get("/api/CPU/list");
  }

  static async getCpuById(id) {
    return $api.get(`/api/CPU/${id}`);
  }

  static async updateCpu(id, payload) {
    return $api.patch(`/api/CPU/${id}`, payload);
  }

  static async deleteCpu(id) {
    return $api.delete(`/api/CPU/${id}`);
  }
}
