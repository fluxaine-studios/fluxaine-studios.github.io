import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import techImg from "@site/static/img/tech-feature-image.png";
import cultureImg from "@site/static/img/culture-feature-image.png";
import researchImg from "@site/static/img/research-feature-image.png";

// type FeatureItem = {
//   title: string;
//   Svg: React.ComponentType<React.ComponentProps<"svg">>;
//   description: ReactNode;
// };

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Technology",
    image: techImg,
    description: (
      <>Android Apps, STL Designs for 3D-Printing, and Rust Trading Software.</>
    ),
  },
  {
    title: "Culture",
    image: cultureImg,
    description: (
      <>Music Production and Mix-downs, AI & Trad-media Artwork, and Recipes.</>
    ),
  },
  {
    title: "Applied Research",
    image: researchImg,
    description: (
      <>
        Anthropology, Somatic Theory deep-dives, and
        Open-Source-Intelligence-driven Reports.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
