"use client";
import * as React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Features from "../components/feature";
export default function LandingPage() {
  return (
    <div className=" text-[#FFFFFF]">
      <div className={`${styles.container} p-[10%] bg-[#2d2b42]`}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>"From Farm to Fork, Taste the Magic"</h1>
          <p className={styles.desc}>
            Step into the world of the Agri-Business Platform, where the rich
            tapestry of India's agricultural bounty unfolds. From the verdant
            fields of our diligent farmers to the discerning palates of buyers
            nationwide, every step of our journey celebrates the essence of
            freshness and flavor. Explore our dynamic online marketplace, where
            farmers showcase their finest harvests, and buyers discover a
            cornucopia of options, from succulent fruits to crisp vegetables and
            beyond.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/hero.png" alt="" fill className={styles.heroImg} />
        </div>
      </div>
      <div className="h-[120%]">
        <Features />
      </div>
    </div>
  );
}
