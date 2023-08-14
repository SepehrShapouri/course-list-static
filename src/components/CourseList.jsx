import { AiFillStar } from "react-icons/ai";
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
          <div className="course" key={course.id}>
            <img className="courseImage" src={course.imgUrl} alt="image" />
            <div className="courseDetail">
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
              <div className="courseDetail__footer">
                <div className="tags">
                {course.tags.map((tag) => {
                  return <span className="courseDetail__badge">{tag}</span>;
                })}
                </div>
                <div className="courseDetail__footer-essentials">
                  <p className="courseDetail__date">{course.date}</p>
                  <span className="courseDetail__badge">Completed</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CourseList;
