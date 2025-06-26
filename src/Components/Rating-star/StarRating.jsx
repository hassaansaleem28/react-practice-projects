import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function StarRating({ maxStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleClick(index) {
    setRating(index);
  }
  function handleHoverOn(index) {
    setTempRating(index);
  }
  function handleHoverLeave() {
    setTempRating(rating);
  }
  const StarStyle = {
    cursor: "pointer",
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        marginBottom: "5rem",
        width: "50%",
        transform: "translate(37%, 10%)",
        padding: "4rem 3rem",
      }}
    >
      <h1 style={{ color: "#fff", paddingTop: "2rem" }}>Project 3</h1>
      <h1 style={{ color: "#fff" }}>"STARS FOR RATING"</h1>
      {Array.from({ length: maxStars }, (_, i) => {
        i += 1;
        return (
          <FaStar
            key={i}
            style={StarStyle}
            className={i <= (tempRating || rating) ? "active" : "inactive"}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleHoverOn(i)}
            onMouseLeave={() => handleHoverLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
