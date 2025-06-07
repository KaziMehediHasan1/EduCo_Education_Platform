import sendResponse from "../../utils/apiResponse";
import catchAsync from "../../utils/catchAsync";
import { courseServices } from "./course.service";

// CREATE A COURES
const createACourse = catchAsync(async (req, res) => {
  const result = await courseServices.createCourse(req.body);
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "Not created this coure , beacuase your data is not found",
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "course created successful",
  });
});

// GET ALL COURSES
const getAllCourses = catchAsync(async (req, res) => {
  const result = await courseServices.getCourses();
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      message: "not found course",
      success: false,
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "course find successfully",
  });
});

// GET COURSE BY ID
const getCourseById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await courseServices.getCouresById(id);
  if (!result) {
    sendResponse(res, {
      statusCode: 404,
      success: false,
      message: "this course not finding",
    });
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    data: result,
    message: "get course succesfully",
  });
});

export const courseController = {
  createACourse,
  getAllCourses,
  getCourseById,
};
