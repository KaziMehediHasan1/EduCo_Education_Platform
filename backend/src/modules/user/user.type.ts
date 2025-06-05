export enum Role {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR",
  ADMIN = "ADMIN",
}
export interface IUser {
  name: string;
  role: Role;
  uid: string;
  email: string;
  image?: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
