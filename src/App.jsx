import "./App.css";
import CourseHeader from "./components/CourseHeader";
import CourseList from "./components/CourseList";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="container">
          <CourseHeader />
          <CourseList />
        </div>
      </div>
    </>
  );
};

export default App;
