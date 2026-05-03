export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type StoredAccount = {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  password: string;
};
