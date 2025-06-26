import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [curImage, setCurImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleNext() {
    setCurImage(curImage === images.length - 1 ? 0 : curImage + 1);
  }
  function handlePrevious() {
    setCurImage(curImage === 0 ? images.length - 1 : curImage - 1);
  }

  useEffect(
    function () {
      async function fetchImages() {
        try {
          setIsLoading(true);
          const res = await fetch(`${url}?page=${page}&limit=${limit}`);
          const data = await res.json();
          setIsLoading(false);
          if (data) setImages(data);
        } catch (err) {
          setIsLoading(false);
          throw new Error(err.message);
        }
      }
      fetchImages();
    },
    [url, limit, page]
  );
  if (isLoading) return <h4>Loading data...</h4>;

  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          width: "50%",
          transform: "translate(37%,10%)",
          padding: "2rem 3rem",
        }}
      >
        <h1 style={{ color: "#fff", paddingTop: "2rem" }}>Project 4</h1>
        <h1 style={{ color: "#fff" }}>"IMAGE SLIDER"</h1>
      </div>
      <div className="container">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="arrow arrow-left"
        />
        {images?.map((img, i) => (
          <img
            src={img.download_url}
            key={img.id}
            className={
              curImage === i ? "current-image" : "current-image cur-img-hide"
            }
            alt="images"
          />
        ))}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="arrow arrow-right"
        />
        <span className="circle-indicators">
          {images?.map((_, i) => (
            <button
              key={i}
              className={
                curImage === i
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurImage(i)}
            ></button>
          ))}
        </span>
      </div>
    </>
  );
}

export default ImageSlider;
