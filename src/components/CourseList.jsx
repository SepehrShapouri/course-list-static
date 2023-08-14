import { AiFillStar } from "react-icons/ai";
import Course from "./Course";
const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "Best english courses with the best teachers across the world",
    tags: ["languages", "english"],
    imgUrl: "/images/image-1.jpg",
    rate: "4.3",
    date:new Date().toLocaleDateString()
  },
  {
    id: 2,
    title: "Web Development",
    description: "Master the art of web development with the best coaches!",
    tags: ["programming", "web development"],
    imgUrl: "/images/image-2.avif",
    rate: "5",
    date:new Date().toLocaleDateString()
  },
  {
    id: 3,
    title: "React js",
    description:
      "Learn and mater React.js,a useful and trending Javascript library",
    tags: ["programming", "React.js"],
    imgUrl: "/images/image-3.png",
    rate: "5",
    date:new Date().toLocaleDateString()
  },
];
const CourseList = () => {
  return (
    <section className="courseList">
      {courses.map((course) => {
        return (
          <Course key={course.id} title={course.title} rate={course.rate} date={course.date} description={course.description} tags={course.tags} imgUrl={course.imgUrl}/>
        );
      })}
    </section>
  );
};

export default CourseList;
