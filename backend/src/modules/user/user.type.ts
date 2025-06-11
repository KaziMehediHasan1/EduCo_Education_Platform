export enum Role {
  STUDENT = "STUDENT",
  INSTRUCTOR = "INSTRUCTOR",
  ADMIN = "ADMIN",
}
export type changeRoleReqStatus = "pending" | "approved" | "rejected" | null;
export interface IUser {
  name: string;
  role: Role;
  uid: string;
  email: string;
  image?: string;
  password: string;
  changeRoleReq: changeRoleReqStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
