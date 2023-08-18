import { AiFillStar } from "react-icons/ai";
import Badge from "./Badge";
const Course = ({ course }) => {
  return (
    <div className="course">
      <img className="courseImage" src={course.imgUrl} alt="image" />
      <div className="courseDetail">
        <CourseHeader course={course} />
        <CourseFooter course={course} />
      </div>
    </div>
  );
};

const CourseHeader = ({ course }) => {
  return (
    <div className="courseDetail__header">
      <div className="courseDetail__name-essentials">
        <h3 className="courseDetail__name">{course.title}</h3>
        <span className="star">
          <AiFillStar />
          {course.rate}
        </span>
      </div>
      <p className="couresDetail__descp">{course.description}</p>
    </div>
  );
};
const CourseFooter = ({ course }) => {
  return (
    <div className="courseDetail__footer">
      <div className="tags">
        {course.tags.map((tag) => (
          <Badge key={tag} tag={tag} />
        ))}
      </div>
      <div className="courseDetail__footer-essentials">
        <p className="courseDetail__date">{course.date}</p>
        <Badge tag={course.status} />
      </div>
    </div>
  );
};
export default Course;
