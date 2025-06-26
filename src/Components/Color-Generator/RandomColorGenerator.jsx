import { useEffect, useState } from "react";

function RandomColorGenerator() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("#000");

  function getRandomUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) hexColor += hex[getRandomUtility(hex.length)];
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = getRandomUtility(256);
    const g = getRandomUtility(256);
    const b = getRandomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (colorType === "RGB") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [colorType]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        marginBottom: "2rem",
      }}
    >
      <h1 style={{ color: "#fff", paddingTop: "2rem" }}>Project 2</h1>
      <h1 style={{ color: "#fff" }}>"RANDOM COLOR GENERATOR"</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          paddingTop: "1rem",
        }}
      >
        <button
          style={{
            padding: "0.4rem 1rem",
            fontSize: "1.2rem",
            fontWeight: "700",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setColorType("HEX")}
        >
          Create Hex Color
        </button>
        <button
          style={{
            padding: "0.4rem 1rem",
            fontSize: "1.2rem",
            fontWeight: "700",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={
            colorType === "HEX"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <button
          style={{
            padding: "0.4rem 1rem",
            fontSize: "1.2rem",
            fontWeight: "700",
            borderRadius: "9px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setColorType("RGB")}
        >
          Create RGB Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "1.6rem",
            backgroundColor: "red",
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            width: "17rem",
            transform: "translate(158%, 30%)",
            marginTop: "70px",
            color: "white",
          }}
        >
          {colorType === "HEX" ? "HEX Color" : "RGB Color"}
        </p>
        <h1 style={{ fontSize: "2rem", color: "white" }}>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
