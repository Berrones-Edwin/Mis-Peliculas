export interface responseLogin {
  token: string;
  user: Array<userLogin>;
  exito: number;
}

export interface userLogin {
  id: number;
  name: string;
  lastname: string;
  email: string;
}
