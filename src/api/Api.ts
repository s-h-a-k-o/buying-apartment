import { ApiWrapper } from "./ApiWrapper";
import { ApiUser } from "./ApiUser";
import { NextPageContext } from "next";
import Router from "next/router";
import { NextRequest } from "next/server";
import { ApiApartment } from "./ApiApartment";

const isServer = () => {
  return typeof window === "undefined";
};

class Api {
  private req = new ApiWrapper();
  private token = "";
  private context = <NextPageContext>{};

  user: ApiUser;
  apartment: ApiApartment;

  constructor() {
    if (!isServer()) {
      this.token = localStorage.getItem("token") || "";
    }
    this.setToken(this.token);
    this.req.client.interceptors.response.use(
      async (res) => {
        return res;
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          if (isServer()) {
            this.context.res?.setHeader("location", "/user/login");
            this.context.res!.statusCode = 302;
            this.context.res?.end();
          } else {
            localStorage.removeItem("token");
            Router.push("/user/login");
          }
        }
        return Promise.reject(error);
      }
    );

    this.user = new ApiUser(this.req);
    this.apartment = new ApiApartment(this.req);
  }

  setContext = (_context: NextPageContext) => {
    this.context = _context;
  };

  setToken = (_token: string) => {
    this.token = _token;
    NextRequest;
    if (!isServer()) {
      localStorage.setItem("token", _token);
    }
    this.req.client.defaults.headers.common["Authorization"] = !!_token
      ? `Bearer ${_token}`
      : "";
  };

  get http() {
    return this.req.client;
  }
}

export const API = new Api();
