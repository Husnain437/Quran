import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TasbeehCard from "../common/tasbeehCard";
import { kitab, tasbeehbgmain, tasbeehMain } from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);
const Tasbeeh = () => {
  const TasbeehData = [1, 2, 3, 4, 5];
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
        <img src={tasbeehMain} alt="tasbeeh" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p id="duas_head" className="gilroy-bold md:text-4xl  text-md mb-0">
              Tasbeeh
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
            Tasbeeh
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="duas" className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Tasbeeh
          </h4>
          <p className="text-white md:w-[40rem] text-center md:text-[16px] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            Et integer facilisi eget diam.Lorem ipsum dolor
          </p>
        </div>
        <div className="flex justify-center ">
          <img src={tasbeehbgmain} className="mx-auto" alt="" />
        </div>
      </div>
      <div className="px-2 pe-4 ">
        <div className="parent ">
          <div className="px-3">
            <button className="btn_ btn_primary text-xl rounded-full px-[2rem] py-[.7rem] mt-4 mb-3">
              <div className="flex gap-1 items-center ">
                <img src={kitab} width="27px" alt="kitab" />
                <p className="m-0 gilroy-bold text-[15px]">All</p>
              </div>
            </button>
          </div>
          <div id="name_card" className="container mx-auto px-4 py-8 ">
            {TasbeehData?.map((card, index) => (
              <TasbeehCard recite={false}/>
            ))}
          </div>
          <div className="flex justify-center pb-8 ">
            <button className="w-full text-[#AC8B49]  ">View more...</button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default Tasbeeh;
