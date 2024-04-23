interface IUserAuth {
  id?: string;
  role?: string;
  email: string;
  password: string;
  authenticate?: Promise<string | null>;
};

export default IUserAuth;