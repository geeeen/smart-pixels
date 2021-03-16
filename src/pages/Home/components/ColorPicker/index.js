import React, { memo, useCallback } from "react";
import { TwitterPicker } from "react-color";

const ColorPicker = ({ color, setColor }) => {
  const handleChangeColor = useCallback(
    (color) => {
      setColor(color.hex);
    },
    [setColor]
  );

  return (
    <TwitterPicker
      triangle={"hide"}
      color={color}
      onChange={handleChangeColor}
    />
  );
};

export default memo(ColorPicker);
