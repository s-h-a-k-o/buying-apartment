import { ApiWrapper } from "./ApiWrapper";

export class ApiUser {
  constructor(private readonly req: ApiWrapper) {}

  login = async (body: {
    email: string;
    password: string;
  }): Promise<any> => {
    const { data } = await this.req.POST<any>("auth/login", body);
    return data;
  };

  signup = async (body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    phoneNumber: string;
  }): Promise<any> => {
    const { data } = await this.req.POST<any>("auth/signup", body);
    return data;
  };
}
