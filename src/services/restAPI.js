import http from "../http-common";

class restAPI {

  getAll() {
    return http.get("/teste");
  }

}

export default new restAPI();
