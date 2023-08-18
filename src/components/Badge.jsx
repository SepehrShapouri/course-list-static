const Badge = ({ tag }) => {
  return (
    <span
      className={`courseDetail__badge ${
        tag == "learning"
          ? "learning"
          : tag == "completed"
          ? "completed"
          : tag == "upcoming"
          ? "danger"
          : ""
      }`}
    >
      {tag}
    </span>
  );
};

export default Badge;
