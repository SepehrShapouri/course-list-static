import { AiFillStar } from "react-icons/ai";
import Course from "./Course";
import courses from "../data/course";
const CourseList = () => {
  return (
    <section className="courseList">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </section>
  );
};

export default CourseList;
