import { Response } from "express";
interface IApiResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>) => {
  res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data?.statusCode,
    data: data?.data,
    message: data?.message,
  });
};

export default sendResponse;
