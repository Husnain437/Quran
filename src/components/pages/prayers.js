import 'bootstrap/dist/css/bootstrap.min.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import PrayerTable from "../common/prayerTable";
import TimeCard from "../common/timeCard";
import { asar, fajar, magrib, prayerBg } from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);
const Prayers = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    var scrollTrigger1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#namaz",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
      },
    });
    var scrollTrigger2 = gsap.timeline({
      scrollTrigger:{
        trigger:"#prayer_table",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
        
      }
    })
    tl.fromTo(
      "#prayer_time",
      {
        x: 300,
      },
      {
        x: 0,
        duration: 1.5,
      }
    );
    tl.fromTo(
      "#loc_time",
      {
        scale: 0,
      },
      { scale: 1, duration: 1 },0
    );
    tl.fromTo("#item",
      {
        y:50,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
        duration:1,
      }
    )
    // scrollTrigger1.fromTo(
    //   "#namaz_time",
    //   {
    //     x:-1600
    //   },
    //   {
    //     x:0,
    //   }
    // )
    scrollTrigger2.fromTo(
      "#time_table",
      {
        scale:2,
        opacity:0,
      },
      {
        scale:1,
        opacity:1,
      }
    )
    gsap.to("#namaz", {
      scrollTrigger: {
        trigger: "#namaz",
        start: "top 80%",
       
        onEnter: () => {
          gsap.fromTo("#namaz_time",   
            {
             
              x:-1500
            },
            { 
                 opacity:1,
                x:0,     
              duration: 1.5,     
              
            }
          );
        },
        // once: true,
      },
    });


  }, []);

  const [month, setMonth] = useState("July");
  const [year, setYear] = useState("2024");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const prayers = [
    {
      time: "04:54 AM",
      name: "Fajir",
      icon: fajar,
    },
    {
      time: "04:54 AM",
      name: "Zuhr",
      icon: fajar,
    },
    {
      time: "04:54 AM",
      name: "Asar",
      icon: asar,
    },
    {
      time: "04:54 AM",
      name: "Magrib",
      icon: magrib,
    },
    {
      time: "04:54 AM",
      name: "Isha",
      icon: fajar,
    },
  ];

  return (
    <>
      <main className=" bg_brown_shade">
        <section className="2xl:container grid mx-auto">
          <div className="relative  min-h-[13rem] ">
            <img
              src={prayerBg}
              alt="prayer"
              className="md:h-auto h-[13rem] w-100"
            />
            <div className="absolute bottom-20 md:left-20 sm:left-16 left-9">
              <div id="prayer_time" className="flex flex-col justify-center gap-0  text-white">
                <p className="gilroy-bold md:text-[44px] text-md mb-0">
                  Prayer Timing in Current Location
                </p>
                <p className="mt-0 opacity-40 text-[22px]">
                  Next prayer in 00:00:00
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="2xl:container grid mx-auto">
          <div className="px-8 py-7">
            <Breadcrumb style={{ color: "white" }}>
              <Breadcrumb.Item
                className="gilroy-medium" id="item"
                style={{ color: "#AA8555" }}
                href="/"
              >
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item
                className="gilroy-medium text-white opacity-45" id="item"
                active
              >
                Prayer Timing
              </Breadcrumb.Item>
            </Breadcrumb>
            <div id="loc_time" className="flex flex-col gap-3 items-center">
              <h4 className="text-white gilroy-bold md:text-[37px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
                Prayer Timing based on location
              </h4>
              <p className="text-white md:w-[40rem] sm:w-[37rem]  text-center md:text-[16px] text-[13px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper habitant arcu eget. Et integer
                facilisi eget diam.Lorem ipsum dolorLorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus semper
                habitant arcu eget. Et integer facilisi eget diam.Lorem ipsum
                dolor
              </p>
            </div>
          </div>
        </section>
        <section id="namaz" className="2xl:container grid mx-auto">
          <div className="px-2">
            <div id="namaz_time" className="flex gap-2 lg:flex-row flex-col " style={{opacity:0}}>
              {prayers?.map((item, index) => {
                return (
                  <TimeCard
                    key={index}
                    time={item?.time}
                    icon={item?.icon}
                    name={item?.name}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section  className="2xl:container grid mx-auto ">
          <div className="px-8  pt-24 pb-12">
            <div className="flex flex-col gap-3">
              <h5 className="gilroy-bold text-[30px] text-white ">
                Prayer Time Table
              </h5>
              <div className="flex flex-row justify-between">
                <p className="text-white">Dhul Hajjah 1445 - Moharram 1446</p>
              </div>
              <div  className="mt-4 flex md:flex-row flex-col gap-3 w-fit">
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="bg-[#1E1E1A] text-white px-2 py-3 rounded-md sm:w-[300px] xs:w-[270px] xss:w-[250px] "
                >
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="bg-[#1E1E1A] text-white px-2 py-3 rounded-md sm:w-[300px] xs:w-[270px] xss:w-[250px]"
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="btn_ btn_primary text-xl rounded-full px-[3.6rem] py-[.7rem] mt-4">
              Submit
            </button>
          </div>
        </section>
        {/* <Container fluid="lg"> */}
        <section id="prayer_table" className="2xl:container mx-auto overflow-hidden">
          <div className="xss:px-8">
            <div id="time_table" className="mt-7 mb-24  overflow  ">
              <PrayerTable />
            </div>
          </div>
        </section>
        {/* </Container> */}
        <Footer />
      </main>
    </>
  );
};

export default Prayers;
