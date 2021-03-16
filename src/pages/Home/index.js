import React, { memo } from "react";

import styles from "./styles.module.scss";

const Home = () => {
  return <div className={styles.container}>Hello world</div>;
};

export default memo(Home);
