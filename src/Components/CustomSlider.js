import "./CustomSlider.css";
import React, { useCallback, useEffect, useState, useRef } from "react";

function CustomSlider(props) {
  const [position, setPosition] = useState(
    Math.round(props.max - props.min / 2)
  );
  const [percentage, setPercentage] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const handleRef = useRef(null);

  const handleDrag = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      var x = e.clientX ?? e.touches[0].clientX;

      const offset = x - sliderRef.current.getBoundingClientRect().left;

      var localPercentage = (offset / sliderRef.current.clientWidth) * 100;

      if (localPercentage < 0) {
        setPosition(props.min);
        handleRef.current.style.transform = `translateY(-50%) translateX(calc(00cqw - 25px)`;
        localPercentage = 0;
        setPercentage(localPercentage);
        return;
      }

      if (localPercentage > 100) {
        setPosition(props.max);
        handleRef.current.style.transform = `translateY(-50%) translateX(calc(100cqw - 25px)`;
        localPercentage = 100;
        setPercentage(localPercentage);
        return;
      }

      if (props.steps !== "0") {
        const stepPercentage = (props.steps / (props.max - props.min)) * 100;
        localPercentage = Math.min(
          Math.ceil(localPercentage / stepPercentage) * stepPercentage,
          100
        );
      }

      setPercentage(localPercentage);
      setPosition(
        ((props.max - props.min) / 100) * localPercentage + Number(props.min)
      );
      handleRef.current.style.transform = `translateY(-50%) translateX(calc(${localPercentage}cqw  - 25px)`;
    },
    [props.max, props.min, props.steps]
  );

  useEffect(() => {
    if (handleRef.current !== undefined) {
      handleRef.current.style.transform = `translateY(-50%) translateX(calc(${percentage}cqw  - 25px)`;
    }
  }, []);

  useEffect(() => {
    props.func && props.func(position);
    handleRef.current.style.transform = `translateY(-50%) translateX(calc(${percentage}cqw  - 25px)`;
    setPosition(
      ((props.max - props.min) / 100) * percentage + Number(props.min)
    );
  }, [position, props, percentage]);

  useEffect(() => {
    if (handleRef.current !== null) {
      if (isDragging) {
        window.addEventListener("mousemove", handleDrag);
        window.addEventListener("mouseup", () => {
          setIsDragging(false);
        });
        window.addEventListener("touchmove", handleDrag);
        window.addEventListener("touchend", () => {
          setIsDragging(false);
        });
      } else {
        window.removeEventListener("mousemove", handleDrag);
        window.removeEventListener("touchmove", handleDrag);
      }
    }
  }, [isDragging, handleDrag]);

  return (
    <div className="slider" ref={sliderRef}>
      {Array.from({ length: props.max - props.min }, (v, i) => i).map((i) => {
        return (
          <div
            key={i}
            className={
              "slider__tick" +
              (i % 10 === 0 ? " big" : i % 5 === 0 ? " medium" : "")
            }
            style={{
              left: `${(100 / Math.abs(props.max - props.min)) * i}%`,
            }}
            onClick={(e) => {
              setPosition(i + props.min);
              handleRef.current.style.transform = `translateY(-50%) translateX(calc(${
                (100 / Math.abs(props.max - props.min)) * i
              }cqw - 25px)`;
            }}
          />
        );
      })}
      <div
        className="slider__tick big"
        style={{
          left: `100%`,
        }}
      />
      <div
        className="slider__track"
        style={{
          width: `${percentage}%`,
        }}
      />
      <button
        className="handle"
        ref={handleRef}
        onMouseDown={(e) => {
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
        }}
        onTouchEnd={(e) => {
          setIsDragging(false);
        }}
        onMouseUp={(e) => {
          setIsDragging(false);
        }}
      >
        <p>{Math.round(props.max)}</p>
        <p>{Math.round(position)}</p>
      </button>
    </div>
  );
}

export default CustomSlider;
