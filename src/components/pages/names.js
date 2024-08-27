import React, { useEffect } from "react";
// import { asar, fajar, magrib, prayerBg } from '../icons/icon'
import { Breadcrumb } from "react-bootstrap";
// import TimeCard from '../common/timeCard'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NameCard from "../common/nameCard";
import {
  bismillahbg,
  kitab,
  namesAllah,
  rehman
} from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);

const Names = () => {
  const cardData = [
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
    {
      img: rehman,
      subtitle: "Al-Rehman",
      description: "The Beneficent, The Merciful",
    },
  ];
  useEffect(() => {
    var tl = gsap.timeline();
    var scrollTrigger1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#bismillah_img",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    tl.fromTo(
      "#duas_head",
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
      }
    );
    tl.fromTo(
      "#duas",
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
      },
      0
    );
    tl.fromTo(
      "#item",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
    scrollTrigger1.fromTo(
      "#bismillah_img",
      {
        scale: 1.5,
        opacity: 0,
      },
      {
        scale: 1,
        duration: 1,
        opacity: 1,
      }
    );
  }, []);
  return (
    <main className="2xl:container grid mx-auto bg_brown_shade">
      <div className="relative  min-h-[13rem]">
        <img  loading="lazy" src={namesAllah} alt="prayer" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p id="duas_head" className="gilroy-bold md:text-4xl  text-md mb-0">
              Names of Allah
            </p>
          </div>
        </div>
      </div>
      <div className=" px-8 py-7 overflow-hidden">
        <Breadcrumb style={{ color: "white" }}>
          <Breadcrumb.Item
            className="gilroy-medium"
            id="item"
            style={{ color: "#AA8555", textDecoration: "none" }}
            href="/"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="gilroy-medium text-white opacity-45"
            id="item"
            active
          >
            Names of Allah
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="duas" className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Names of Allah
          </h4>
          <p className="text-white md:w-[40rem] text-center md:text-[16px] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            Et integer facilisi eget diam.Lorem ipsum dolor
          </p>
        </div>
        <div className="flex justify-center">

        <img id="bismillah_img" src={bismillahbg} alt="" />
        </div>
      </div>
      <div className="px-2 pe-4 ">
        <div className="parent ">
          <div className="px-3">
            <button className="btn_ btn_primary text-xl rounded-full px-[1.2rem] py-[.7rem] mt-4 mb-11">
              <div className="flex gap-1 items-center ">
                <img src={kitab} width="27px" alt="kitab" />
                <p className="m-0 gilroy-bold text-[15px]">Al Asma ul Husna</p>
              </div>
            </button>
          </div>
          <div
            id="name_card"
            className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {cardData.map((card, index) => (
              <NameCard
                key={index}
                img={card.img}
                subtitle={card.subtitle}
                description={card.description}
              />
            ))}
          </div>
          <div className="md:px-36 px-8 ">
            <div className="border_gold opacity-55 mt-5 "></div>
          </div>

          <div className="flex justify-center py-8 ">
            <button className="w-full text-[#AC8B49]  ">View more...</button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </main>
  );
};

export default Names;
