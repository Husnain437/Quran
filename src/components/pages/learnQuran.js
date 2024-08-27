import React from "react";
// import { asar, fajar, magrib, prayerBg } from '../icons/icon'
import { Breadcrumb } from "react-bootstrap";
// import TimeCard from '../common/timeCard'
import {
  learnQ,
  namesAllah
} from "../icons/icon";
import Footer from "./footer";

const LearnQuran = () => {
  const surahData = [
    {
      count: 1,
      arbi: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
      translation: "[All] praise is [due] to Allah, Lord of the worlds",
      engTranslation: "Alhamdu lillaahi Rabbil aalameen",
    },
    {
      count: 2,
      arbi: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
      translation: "[All] praise is [due] to Allah, Lord of the worlds",
      engTranslation: "Alhamdu lillaahi Rabbil aalameen",
    },
    {
      count: 3,
      arbi: "اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ",
      translation: "[All] praise is [due] to Allah, Lord of the worlds",
      engTranslation: "Alhamdu lillaahi Rabbil aalameen",
    },
  ];

  return (
    <main className="2xl:container grid mx-auto bg_brown_shade">
      <div className="relative  min-h-[13rem]">
        <img loading="lazy" src={namesAllah} alt="prayer" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p className="gilroy-bold md:text-4xl  text-md mb-0">Learn Quran</p>
          </div>
        </div>
      </div>
      <div className=" px-8 py-7">
        <Breadcrumb style={{ color: "white" }}>
          <Breadcrumb.Item
            className="gilroy-medium"
            style={{ color: "#AA8555", textDecoration: "none" }}
            href="/"
          >
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="gilroy-medium text-white opacity-45"
            active
          >
            Learn Quran
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="gilroy-medium text-white opacity-45"
            active
          >
            Surah
          </Breadcrumb.Item>
          <Breadcrumb.Item
            className="gilroy-medium text-white opacity-45"
            active
          >
            Al - Fatiha
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Al Fatiha
          </h4>
          <p className="text-white md:w-[40rem] text-center md:text-[16px] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            Et integer facilisi eget diam.Lorem ipsum dolor
          </p>
        </div>
        <div className="flex justify-center  relative">

          <img src={learnQ} className="mx-auto" alt="" />
          <div className="absolute  z-30 2xl:left-28 xl:left-24 left-5 md:bottom-10 sm:bottom-5 xss:bottom-1  text-white">
            <p className="gilroy-bold lg:text-[32px] md:text-[25px] sm:text-[13px] xss:text-[13px]">Al-Fatiah</p>
            <p className="lg:text-[23px] md:-[18px]  gilroy-medium lg:pb-9 md:pb-5 sm:pb-2 xss:pb-0">The Opening</p>
            <div className="flex gap-2 items-center text-white md:border-t md:border-[#FFFFFF59] xss:border-0 md:pt-2 xss:pt-0 ">
              <p className="gilroy-medium lg:text-[20px] md:text-[17px] xss:text-[13px] ">Meccan</p>
              <div className="rounded-full h-[7px] w-[7px]  bg-[#FFFFFF59]"></div>
              <p className="gilroy-medium md:text-[20px] xss:text-[13px]">7 verses</p>
            </div>
          </div>
        </div>
        <div className="text-white">
          {surahData?.map((item, index) => (
            <div className="mb-12 lg:mt-3 mt-7" key={index}>
              <div className="flex flex-col gap-2 bg-transparent lg:ps-5 ps-4">
                <div className="rounded-full text-end bg-[#191A19] h-[35px] w-[35px] flex justify-center items-center text-[#AA8555]">
                  {item?.count}
                </div>
                <div className="flex flex-col  lg:pe-0 pe-2">
                  <p className="text-[#AA8555] gilroy-bold lg:text-[37px] text-end md:text-[30px] mb-2">
                    {item?.arbi}
                  </p>
                  <p className="text-white gilroy-medium m-0 lg:text-[22px] md:text-[17px] lg:leading-10 leading-normal">
                    {item?.translation}
                  </p>
                  <p
                    className="text-[#AA8555] gilroy-medium pb-2 lg:text-[22px] md:text-[17px] lg:leading-10 leading-normal "
                    style={{
                      borderBottom: "1px solid rgba(170, 133, 85, 0.1)",
                    }}
                  >
                    {item?.engTranslation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-2 pe-4 ">
        <div className="parent ">
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

export default LearnQuran;
