export enum Role {
  student = "STUDENT",
  instructor = "INSTRUCTOR",
  admin = "ADMIN",
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
