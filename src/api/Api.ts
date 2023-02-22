import { ApiWrapper } from "./ApiWrapper";
import { ApiUser } from "./ApiUser";

class Api {
  private req = new ApiWrapper();

  user: ApiUser;

  constructor() {
    this.user = new ApiUser(this.req);
  }

  get http() {
    return this.req.client;
  }
}

export const API = new Api();
