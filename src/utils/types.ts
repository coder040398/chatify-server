export type CreateUserDetails = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type FindUserParams = Partial<{
  id: number;
  email: string;
}>;

export type VailidateUserDetails = {
  email: string;
  password: string;
};
