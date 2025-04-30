import $api from "../http";

export default class RamService {
  static async createRam(payload) {
    return $api.post("/api/RAM", payload);
  }

  static async getAllRams() {
    return $api.get("/api/RAM/list");
  }

  static async getRamById(id) {
    return $api.get(`/api/RAM/${id}`);
  }

  static async updateRam(id, payload) {
    return $api.patch(`/api/RAM/${id}`, payload);
  }

  static async deleteRam(id) {
    return $api.delete(`/api/RAM/${id}`);
  }
}
