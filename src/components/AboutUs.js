import React, { Component } from "react";
import styles from './About.module.css';

class About extends Component {
  render() {
    return (
      <div className="text-justify ">
        <div className={`${styles.aboutContainer}`}>
          <h2 className={styles.section__title}>About Us</h2>
          <br></br>
          <br></br>
          <br></br>
          <p className="mb-3">
            <span className={`${styles.highlight} ${styles.text__large}`}>
              Heritage Haulage
            </span>{" "}
            is an independent family-run haulage company, specialising in
            Container Transport, Tautliners and Refrigerated Shipping. Situated
            in Portsmouth, Hampshire, Heritage Haulage Ltd are a family-owned
            road haulage business that are a highly versatile logistics company
            offering competitive delivery rates.
          </p>
          <p className="mb__3">
            Offering personalised, uniquely tailored, cost effective
            transportation, logistics and road haulage solutions for a varied
            and demanding client base. With a constantly updated modern fleet of
            vehicles we offer an extensive range of services.
          </p>
          <p>
            From the delivery of a single pallet, through to multiple timed
            groupage deliveries and full load shipments, we relentlessly fulfil
            all of your haulage requirements.
          </p>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default About;
