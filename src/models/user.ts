export interface SignUpType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phoneNumber: string;
}

export interface SignInType {
  email: string;
  password: string;
}
