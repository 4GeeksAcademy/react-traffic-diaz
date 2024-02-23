import React, { useState } from 'react';

const TrafficLight = () => {
  const [colorIndex, setColorIndex] = useState();
  const colors = ['red', 'yellow', 'green'];

  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div className="trafficLight">
      <div className="base"></div>
      <div className="semaForo">
        <div className={"light red " + (colors[colorIndex] === "red" ? "redOn" : "")}
          onClick={() => setColorIndex(0)}>
        </div>
        <div className={"light yellow " + (colors[colorIndex] === "yellow" ? "yellowOn" : "")}
          onClick={() => setColorIndex(1)}>
        </div>
        <div className={"light green " + (colors[colorIndex] === "green" ? "greenOn" : "")}
          onClick={() => setColorIndex(2)}>
        </div>
      </div>
      <button onClick={changeColor}>Cambiar Color</button>
    </div>
  );
}

export default TrafficLight;




