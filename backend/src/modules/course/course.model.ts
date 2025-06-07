import mongoose from "mongoose";
import { LessonType, TCourse } from "./course.type";

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: Object.values(LessonType),
    required: true,
  },
  videoURL: {
    type: String,
    required: function (this: { type: LessonType }) {
      return this.type === LessonType.VIDEO;
    },
  },
  duration: { type: Number },
  isPreview: { type: Boolean, default: false },
  content: { type: String },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number,
    },
  ],
});

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [lessonSchema],
});

const courseSchema = new mongoose.Schema<TCourse>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: [String], required: true },
    category: { type: String, required: true },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      required: true,
    },
    tags: { type: [String], required: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sections: [sectionSchema],
  },
  { timestamps: true }
);

export default mongoose.model<TCourse>("Course", courseSchema);
