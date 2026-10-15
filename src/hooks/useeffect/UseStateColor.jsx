import { useState } from "react";

const UseStateColor = () => {
  const [color, setColor] = useState("red");

  const changeColor = () => {
    if (color === "red") {
      setColor("blue");
    } else {
      setColor("red");
    }
  };

  return (
    <div>
      {/* Colored Square */}
      <div
        style={{
          backgroundColor: color,
          height: "200px",
          width: "200px",
        }}
      ></div>

      {/* Toggle Button */}
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default UseStateColor;
