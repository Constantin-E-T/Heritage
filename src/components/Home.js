import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <jumbotron className={styles.jumbotron}>
        <div
          className={`${styles.parallax} ${
            scrollPosition > 50 ? styles.scroll__animation : ''
          }`}
        >
          <h1 className="display-4">Heritage Haulage</h1>
          <p className="lead">Your trusted haulage partner</p>
        </div>
      </jumbotron>
      <div className="container">
      <h2 className={styles.section__title}>About Us</h2>
        <p className="mb-3">
          <span className={`${styles.highlight} ${styles.text__large}`}>Heritage Haulage</span> is an independent family-run haulage company, specialising in Container Transport, Tautliners and Refrigerated Shipping. Situated in Portsmouth, Hampshire, Heritage Haulage Ltd are a family-owned road haulage business that are a highly versatile logistics company offering competitive delivery rates.
        </p>
        <p className="mb__3">
          Offering personalised, uniquely tailored, cost effective transportation, logistics and road haulage solutions for a varied and demanding client base. With a constantly updated modern fleet of vehicles we offer an extensive range of services. 
        </p>
        <p>
          From the delivery of a single pallet, through to multiple timed groupage deliveries and full load shipments, we relentlessly fulfil all of your haulage requirements.
        </p>
      </div>
    </div>
  );
};

export default Home;
