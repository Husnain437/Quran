import { message } from "antd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import TasbeehCard from "../common/tasbeehCard";
import { reciteTasbeeh, tasbeehbgmain } from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);
const ReciteTasbeeh = () => {
  const [increment, setIncrement] = useState([]);
  const radius = 150;
  const smallCircleRadius = 12.5
  const borderThickness = 1;
  const handleCount = () => {
    if (increment?.length <= 33) {
      setIncrement((prev) => [...prev, 1]);
    } else {
      setIncrement(increment);
      message.success("You have completed 33 Tasbeeh recitations");
    }
  };
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
        <img
          src={reciteTasbeeh}
          alt="tasbeeh"
          className="md:h-auto h-[13rem]"
        />
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
      <div className="px-2 md:pe-4 p-0 ">
        <div id="name_card" className="container mx-auto px-4 pb-8 pt-2 ">
          <TasbeehCard recite={true} />
          <div className="flex md:justify-between md:items-start xss:items-center xss:justify-center md:flex-row xss:flex-col  text-white">
            <div className="flex md:flex-row xss:flex-col md:items-start xss:items-center gap-3">
              <p className="text-[#A8A8A8]">Reminder: 33</p>
              <p className="text-[#A8A8A8]">Tasbeeh: 1</p>
            </div>
            <button
              type="button"
              onClick={() => setIncrement([])}
              className="gilroy-medium text-[24px]"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div
              className="rounded-full h-[300px] w-[300px] flex items-center justify-center"
              style={{ border: `${borderThickness}px dotted #867157` }}
            >
              {increment.map((item, index) => {
                const angle = (index / increment.length) * (2 * Math.PI); 
                console.log(angle, "angle");
                
                const x =
                  radius +
                  (radius - smallCircleRadius - borderThickness) *
                    Math.cos(angle);
                    console.log(Math.cos(angle),"cos angle");
                    
                const y =
                  radius +
                  (radius - smallCircleRadius - borderThickness) *
                    Math.sin(angle);

                return (
                  <div
                    key={index}
                    className="absolute text-white"
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="rounded-full m-1 h-[25px] w-[25px] bg_brown_shade2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center pb-28 pt-7">
          <button className="count_btn" onClick={handleCount}>
            Counter
          </button>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default ReciteTasbeeh;
