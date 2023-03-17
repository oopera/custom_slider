import "./App.css";
import CustomSlider from "./Components/CustomSlider";
import React, { useState } from "react";
function App() {
  const [steps, setSteps] = useState(5);
  const [min, setMin] = useState(Number(-5));
  const [max, setMax] = useState(55);
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="App">
      <div className="control-panel-container">
        <div className="hyphen" />
        <div className="control-panel">
          <div className="control-panel__item">
            <label>Steps</label>
            <input
              value={steps}
              type="number"
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>
          <div className="control-panel__item">
            <label>Min</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
            />
          </div>
          <div className="control-panel__item">
            <label>Max</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>
        <div className="hyphen" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 90 + "%",
          height: "fit-content",
          alignItems: "center",
        }}
      >
        <CustomSlider
          min={Number(min)}
          func={setSliderValue}
          max={max}
          steps={steps}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 90 + "%",
          height: "fit-content",
          alignItems: "center",
          gap: "75px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 90 + "%",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <CustomSlider min={0} max={150} steps={1} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 90 + "%",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <CustomSlider min={15} max={25} steps={steps} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: 30 + "%",
          minWidth: 300 + "px",
          height: "fit-content",
          alignItems: "center",
          gap: "75px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 90 + "%",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <CustomSlider min={0} max={150} steps={1} />
          <CustomSlider min={Number(min)} max={max} steps={steps} />
          <CustomSlider min={15} max={25} steps={steps} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 90 + "%",
            height: "fit-content",
            alignItems: "center",
          }}
        >
          <CustomSlider min={0} max={150} steps={1} />
          <CustomSlider min={15} max={25} steps={steps} />
          <CustomSlider min={Number(min)} max={max} steps={steps} />
        </div>
      </div>

      <pre style={{ letterSpacing: `${Math.abs(sliderValue / 2)}px` }}>
        {`        Custom Slider
          Custom Slider
            Custom Slider
          Custom Slider
          Custom 
                 Slider`}
        {`luc
                as
                lucas     lichner`}
      </pre>
      <a id="web" href="https://lucaslichner.de" target={"_blank"}>
        <svg
          width="25"
          height={25}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill=" rgb(105, 105, 105)"
        >
          <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
