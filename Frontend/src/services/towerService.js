import $api from "../http";

export default class TowerService {
  static async createTower(payload) {
    return $api.post("/api/tower", payload);
  }

  static async getAllTowers() {
    return $api.get("/api/tower/list");
  }

  static async getTowerById(id) {
    return $api.get(`/api/tower/${id}`);
  }

  static async updateTower(id, payload) {
    return $api.patch(`/api/tower/${id}`, payload);
  }

  static async deleteTower(id) {
    return $api.delete(`/api/tower/${id}`);
  }
}
