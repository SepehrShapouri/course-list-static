import "./App.css";
import { AiFillStar } from "react-icons/ai";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <header className="appHeader">
            <h1 className="appTitle">My Courses (3)</h1>
            <ul className="courseFilters">
              <li>All</li>
              <li>Active</li>
              <li>Completed</li>
              <li>Upcoming</li>
            </ul>
          </header>
          <section className="courseList">
            <div className="course">
              <img
                className="courseImage"
                src="/images/image-1.jpg"
                alt="image"
              />
              <div className="courseDetail">
                <div className="courseDetail__header">
                  <div className="courseDetail__name-essentials">
                    <h3 className="courseDetail__name">English Lecture</h3>
                    <span className="star">
                      <AiFillStar />
                      4.3
                    </span>
                  </div>
                  <p className="couresDetail__descp">
                    language lessons with the best teachers
                  </p>
                </div>
                <div className="courseDetail__footer">
                  <span className="courseDetail__badge">language</span>
                  <div className="courseDetail__footer-essentials">
                    <p className="courseDetail__date">Jul 1,2023</p>
                    <span className="courseDetail__badge">Completed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <img
                className="courseImage"
                src="/images/image-2.avif"
                alt="image"
              />
              <div className="courseDetail">
                <div className="courseDetail__header">
                  <div className="courseDetail__name-essentials">
                    <h3 className="courseDetail__name">English Lecture</h3>
                    <span className="star">
                      <AiFillStar />
                      4.3
                    </span>
                  </div>
                  <p className="couresDetail__descp">
                    language lessons with the best teachers
                  </p>
                </div>
                <div className="courseDetail__footer">
                  <span className="courseDetail__badge">language</span>
                  <div className="courseDetail__footer-essentials">
                    <p className="courseDetail__date">Jul 1,2023</p>
                    <span className="courseDetail__badge">Completed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <img
                className="courseImage"
                src="/images/image-3.png"
                alt="image"
              />
              <div className="courseDetail">
                <div className="courseDetail__header">
                  <div className="courseDetail__name-essentials">
                    <h3 className="courseDetail__name">English Lecture</h3>
                    <span className="star">
                      <AiFillStar />
                      4.3
                    </span>
                  </div>
                  <p className="couresDetail__descp">
                    language lessons with the best teachers
                  </p>
                </div>
                <div className="courseDetail__footer">
                  <span className="courseDetail__badge">language</span>
                  <div className="courseDetail__footer-essentials">
                    <p className="courseDetail__date">Jul 1,2023</p>
                    <span className="courseDetail__badge">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
