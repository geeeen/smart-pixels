import React, { memo, useState } from "react";

import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import styles from "./styles.module.scss";

const Home = () => {
  const [color, setColor] = useState("#000");

  return (
    <div className={styles.home}>
      <ColorPicker color={color} setColor={setColor} />
      <Canvas color={color} />
    </div>
  );
};

export default memo(Home);
