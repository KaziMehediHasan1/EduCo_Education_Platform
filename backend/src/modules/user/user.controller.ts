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

// LOGIN ME
const loginUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = userServices.loginUser(id);
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "Login Unsuccessful",
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "Login Successfully done",
  });
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
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "user not found",
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "user deleted successfully",
  });
});

// BECOME A INSTRUCTOR
const reqInstructor = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await userServices.reqInstructor(id, payload);
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "try again, not pass your request!",
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "your request is successfull",
  });
});

export const userControler = {
  createAUser,
  loginUser,
  getUsers,
  getAUser,
  deleteAUser,
  reqInstructor,
};
