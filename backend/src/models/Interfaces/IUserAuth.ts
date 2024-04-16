interface IUserAuth {
  id?: string;
  email: string;
  password: string;
  authenticate?: Promise<string | null>;
};

export default IUserAuth;