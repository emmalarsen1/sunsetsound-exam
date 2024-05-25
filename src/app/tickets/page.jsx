import React from "react";
import styles from "./Tickets.module.css";

function page() {
  return (
    <>
      <div className={styles.mainSections}>
        <section className={styles.eachSection}>
          <div className={styles.generalWrapper}>
            <p>Regular Ticket:</p>
            <p>
              A regular ticket grants access to all general admission areas of
              the summer music festival, including the main stage performances,
              food and drink vendors, and general amenities. It ensures a
              vibrant festival experience with access to all public zones.
            </p>
          </div>
          <div className={styles.generalWrapper}>
            <p>VIP Ticket:</p>
            <p>
              A VIP ticket offers exclusive perks, including fast-track entry,
              access to premium viewing areas, and a dedicated lounge with
              complimentary refreshments. VIP guests also enjoy private
              restrooms and priority access to select activities and events.
            </p>
          </div>
        </section>
        <section className={styles.eachSection}>
          <div className={styles.generalWrapper}>
            <p>Two-Person Tent:</p>
            <p>
              A two-person tent provides cozy shelter with easy setup and
              weather-resistant materials, ideal for couples or friends.
            </p>
          </div>
          <div className={styles.generalWrapper}>
            <p>Three-Person Tent:</p>
            <p>
              A three-person tent offers extra space, quick setup, and durable
              construction, perfect for small groups or those needing more room.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
