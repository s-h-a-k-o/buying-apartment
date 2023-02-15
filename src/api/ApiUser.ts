import { ApiWrapper } from "./apiWrapper";

export class ApiUser {
  constructor(private readonly req: ApiWrapper) {}

  login = async (body: {
    username: string;
    password: string;
  }): Promise<any> => {
    const { data } = await this.req.POST<any>("/login", body); //  /auth/login
    return data;
  };
}
