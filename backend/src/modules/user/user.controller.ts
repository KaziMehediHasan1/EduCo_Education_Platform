import sendResponse from "../../utils/apiResponse";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";

// CREATE A USER
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

// GET USERS
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

// GET A USER
const getAUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.getUserById(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "find a user successfully",
  });
});

// DELETE A USER BY ID
const deleteAUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await userServices.deleteAUser(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "user deleted successfully",
  });
});


export const userControler = {
  createAUser,
  getUsers,
  getAUser,
  deleteAUser
};
