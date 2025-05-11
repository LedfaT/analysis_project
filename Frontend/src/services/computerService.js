import $api from "../http";

export default class ComputerService {
  static async createComputer(payload) {
    return $api.post("/api/computer", payload);
  }

  static async getAllComputers() {
    return $api.get("/api/computer/list");
  }

  static async getAllUserComputers() {
    return $api.get("/api/computer/user-computers/list");
  }

  static async getAllUserComputersCount() {
    return $api.get("/api/computer/user-computers/count");
  }

  static async getComputerById(id) {
    return $api.get(`/api/computer/${id}`);
  }

  static async updateComputer(id, payload) {
    return $api.patch(`/api/computer/${id}`, payload);
  }

  static async deleteComputer(id) {
    return $api.delete(`/api/computer/${id}`);
  }
}
