import mongoose from "mongoose";

export enum LessonType {
  ARTICLE = "ARTICLE",
  VIDEO = "VIDEO",
  QUIZ = "QUIZ",
}

export type TLesson = {
  title: string;
  type: LessonType;
  videoURL?: string;       
  duration?: number;       
  isPreview?: boolean;      
  content?: string;         
  questions?: QuizQuestion[];
};

export type Section = {
  title: string;
  lessons: TLesson[];
};

export type TCourse = {
  title: string;
  description: string;
  price: number;
  thumbnail: string[];
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  instructor: mongoose.Types.ObjectId; 
  sections: Section[]; 
};


type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: number;
};