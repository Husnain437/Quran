import React, { useEffect, useState } from "react";
// import { asar, fajar, magrib, prayerBg } from '../icons/icon'
import { Breadcrumb } from "react-bootstrap";
// import TimeCard from '../common/timeCard'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LearningCard from "../common/learningCard";
import { alQuran, bismillahbg } from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);
const Learn = () => {
  const [activeTab, setActiveTab] = useState("surah");
  const tabs = [
    { key: "surah", title: "Surah", count: 13 },
    { key: "juz", title: "Juz", count: 5 },
    { key: "para", title: "Para", count: 9 },
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
        <img loading="lazy" src={alQuran} alt="quran" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p id="duas_head" className="gilroy-bold md:text-4xl  text-md mb-0">
              Learn Quran
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
            Learn Quran
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="duas" className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Learn Quran
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
            <div className="max-w-[19rem]">
              <div className="flex bg-white rounded-md mt-3 overflow-hidden shadow-md">
                {tabs.map((tab) => (
                  <div
                    key={tab.key}
                    className={`flex-1 text-center py-[.6rem] cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-[#caa472] text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    <p className="text-[15px] gilroy-bold">{tab.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 py-4 px-0  rounded-lg ">
              <div className="flex flex-wrap -mx-2">
                {Array.from({
                  length: tabs.find((tab) => tab.key === activeTab)?.count || 0,
                }).map((_, index) => (
                  <div key={index} className="w-full md:w-1/2 px-2 mb-4">
                    <LearningCard />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:px-36 px-8 ">
          <div className="flex justify-center py-8 ">
            <button className="w-full text-[#AC8B49]  ">View more...</button>
          </div>
            <div className="border_gold opacity-55 mt-5 "></div>
          </div>

        </div>
        {/* <CustomCalendar/> */}
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </main>
  );
};

export default Learn;
