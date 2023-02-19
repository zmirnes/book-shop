import React from "react";
import classes from "./TrustedBy.module.css";
import logo1 from "../../assets/images/trustedBy/logo1.png";
import logo2 from "../../assets/images/trustedBy/logo2.png";
import logo3 from "../../assets/images/trustedBy/logo3.png";
import logo4 from "../../assets/images/trustedBy/logo4.png";
import TrustedItem from "./TrustedItem";

const trustedCompanies = [
  {
    id: "t1",
    logo: logo1,
    name: "Amazen Corp",
    description: "A long established fact that a who looking at its layout.",
  },
  {
    id: "t2",
    logo: logo2,
    name: "Megan Books",
    description: "A long established fact that a who looking at its layout.",
  },
  {
    id: "t3",
    logo: logo3,
    name: "Los Books",
    description: "A long established fact that a who looking at its layout.",
  },
  {
    id: "t4",
    logo: logo4,
    name: "Urban Lib",
    description: "A long established fact that a who looking at its layout.",
  },
];

const TrustedBy = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <h2 className={classes.title}>Trusted by the Best</h2>
        <div className={classes.trustedList}>
          {trustedCompanies.map((company) => {
            return (
              <TrustedItem
                key={company.id}
                logo={company.logo}
                name={company.name}
                description={company.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
