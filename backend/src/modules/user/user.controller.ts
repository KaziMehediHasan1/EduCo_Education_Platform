import sendResponse from "../../utils/apiResponse";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";

const createAUser = catchAsync(async (req, res) => {
  const result = await userServices.createUser(req.body);
  if (result) {
    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: "User is created successfully",
    });
  }
});

const getUsers = catchAsync(async (req, res) => {
  const result = await userServices.getUser();
  if (result) {
    sendResponse(res, {
      statusCode: 200,
      success: true,
      data: result,
      message: "users get successfully",
    });
  }
});

export const userControler = {
  createAUser,
  getUsers,
};
