const courseStatus = ["All", "Active", "Completed", "Upcoming"];
const CourseHeader = () => {
  return (
    <header className="appHeader">
      <h1 className="appTitle">My Courses (3)</h1>
      <ul className="courseFilters">
        {courseStatus.map((c) => {
          return <li key={c}>{c}</li>;
        })}
      </ul>
    </header>
  );
};

export default CourseHeader;
