import $api from "../http";

export default class CollingSystemService {
  static async createCollingSystem(payload) {
    return $api.post("/api/cooling-system", payload);
  }

  static async getAllCollingSystems() {
    return $api.get("/api/cooling-system/list");
  }

  static async getCollingSystemById(id) {
    return $api.get(`/api/cooling-system/${id}`);
  }

  static async updateCollingSystem(id, payload) {
    return $api.patch(`/api/cooling-system/${id}`, payload);
  }

  static async deleteCollingSystem(id) {
    return $api.delete(`/api/cooling-system/${id}`);
  }
}
