import { AiFillStar } from "react-icons/ai";
import Badge from "./Badge";
const Course = ({ title, rate, description, date, imgUrl, tags }) => {
  return (
    <div className="course">
      <img className="courseImage" src={imgUrl} alt="image" />
      <div className="courseDetail">
        <div className="courseDetail__header">
          <div className="courseDetail__name-essentials">
            <h3 className="courseDetail__name">{title}</h3>
            <span className="star">
              <AiFillStar />
              {rate}
            </span>
          </div>
          <p className="couresDetail__descp">{description}</p>
        </div>
        <div className="courseDetail__footer">
          <div className="tags">
            {tags.map((tag) => {
              return <Badge key={tag} tag={tag} />;
            })}
          </div>
          <div className="courseDetail__footer-essentials">
            <p className="courseDetail__date">{date}</p>
            <span className="courseDetail__badge">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
