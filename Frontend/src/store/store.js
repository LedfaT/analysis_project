import AuthService from "@services/AuthService";

export default class Store {
  async login(email, password) {
    try {
      const res = await AuthService.login(email, password);

      const userData = res.data;
      userData.isAuth = true;

      localStorage.setItem("userData", userData);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(payload) {
    try {
      const res = await AuthService.registration(payload);

      const userData = res.data;
      userData.isAuth = true;

      localStorage.setItem("userData", userData);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      const res = await AuthService.logout();

      localStorage.removeItem("userData");
    } catch (e) {
      console.log(e);
    }
  }
}
