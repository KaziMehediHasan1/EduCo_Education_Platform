import courseModel from "./course.model";

// CREATE A COURSE
const createCourse = async (payload: any) => {
  const result = await courseModel.create(payload);
  return result;
};
// GET ALL COURSE
const getCourses = async () => {
  const result = await courseModel.find();
  return result;
};

// GET COURSE BY ID
const getCouresById = async (id: string) => {
  const result = await courseModel.findById({ _id: id });
  return result;
};
export const courseServices = {
  createCourse,
  getCourses,
  getCouresById,
};
