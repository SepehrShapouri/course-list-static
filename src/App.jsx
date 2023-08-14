import "./App.css";
import CourseList from "./components/CourseList";
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
          <CourseList/>
        </div>
      </div>
    </>
  );
};

export default App;
