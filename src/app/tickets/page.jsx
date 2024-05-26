import React from "react";
import styles from "./Tickets.module.css";
import TicketCard from "../components/TicketCard";
import Link from "next/link";

function page() {
  return (
    <>
      {" "}
      <h1 className={`globalHeader`}>Tickets</h1>
      <div className={styles.indexButWrap}>
        <Link className={styles.indexButton} href={"/booking"}>
          Get Tickets
        </Link>
      </div>
      <div>
        <div className={styles.eachSection}>
          <TicketCard
            name="REGULAR"
            desc="Full access, all week, all year"
            price="799 DKK"
          ></TicketCard>
          <TicketCard
            name="VIP"
            desc="Full access with extra perks"
            price="1299 DKK"
          ></TicketCard>
        </div>
        <h2 className={styles.campingTitle}>Camping options</h2>
        <div className={styles.eachSection}>
          <TicketCard
            name="2-person-tent"
            desc=" A two-person tent installed by Sunset Sound-crew"
            price="299 DKK"
          ></TicketCard>
          <TicketCard
            name="3-person-tent"
            desc="A three-person tent installed by Sunset Sound-crew"
            price="399 DKK"
          ></TicketCard>
        </div>
      </div>
    </>
  );
}

export default page;

{
  /* 
  
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
</div> */
}
