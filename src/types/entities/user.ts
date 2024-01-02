export type User = {
  user_id: number;
  name: string;
  nrp: string;
  departemen: string;
  nohp: string;
  email: string;
  roles: string[];
};

export type withToken = {
  token: string;
};
