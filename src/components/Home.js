import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Helmet } from "react-helmet";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Heritage Haulage - Home</title>
      </Helmet>
      <div className="jumbotron my-3" id={styles.jumbotron}>
        <div
          className={`${styles.parallax} ${
            scrollPosition > 50 ? styles.scroll__animation : ""
          }`}
        >
          <h1 className="display-4">Your trusted haulage partner</h1>
          <h3 className="lead">Portsmouth. UK</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
