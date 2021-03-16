import React, { memo, useRef, useState, useEffect } from "react";

import styles from "./styles.module.scss";

let ctx;

const Canvas = ({ color }) => {
  const ref = useRef(null);
  const [isPainting, setIsPainting] = useState(false);
  const [prevPos, setPrevPos] = useState({ offsetX: 0, offsetY: 0 });

  useEffect(() => {
    ctx = ref.current.getContext("2d");
  }, []);

  useEffect(() => {
    if (ctx) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 5;
    }
  }, [color]);

  const onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    setIsPainting(true);
    setPrevPos({ offsetX, offsetY });
  };

  const endPaintEvent = () => {
    if (isPainting) setIsPainting(false);
  };

  const onMouseMove = ({ nativeEvent }) => {
    if (isPainting) {
      const { offsetX, offsetY } = nativeEvent;
      paint(offsetX, offsetY);
    }
  };

  const paint = (offsetX, offsetY) => {
    const { offsetX: x, offsetY: y } = prevPos;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
    setPrevPos({ offsetX, offsetY });
  };

  return (
    <canvas
      width={1600}
      height={800}
      ref={ref}
      className={styles.canvas}
      onMouseDown={onMouseDown}
      onMouseLeave={endPaintEvent}
      onMouseUp={endPaintEvent}
      onMouseMove={onMouseMove}
    />
  );
};

export default memo(Canvas);
