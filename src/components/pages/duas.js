import React, { useEffect, useState } from "react";
// import { asar, fajar, magrib, prayerBg } from '../icons/icon'
import { Breadcrumb } from "react-bootstrap";
// import TimeCard from '../common/timeCard'
import Box from "@mui/material/Box";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { allDuas, bismillahbg, duaBg, kitab, Vector } from "../icons/icon";
import Footer from "./footer";
import ImageLoader from "./imageLoader";
gsap.registerPlugin(ScrollTrigger);

const Duas = () => {
  const [link, setlink] = useState();
  const duaData = [
    {
      count: 1,
      arbi: "اَلْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      translation:
        "All praise belongs to Allah Who has restored us back to life after causing us to die; and to Him shall we return.",
    },
    {
      count: 2,
      arbi: "اَلْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      translation:
        "All praise belongs to Allah Who has restored us back to life after causing us to die; and to Him shall we return.",
    },
    {
      count: 3,
      arbi: "اَلْحَمْدُ لِلّٰهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
      translation:
        "All praise belongs to Allah Who has restored us back to life after causing us to die; and to Him shall we return.",
    },
  ];
  const navItems = [
    {
      id: 1,
      label: "All Duas",
      icon: allDuas,
      alt: "all duas",
      eventKey: "first",
      imgSrc: Vector,
    },
    {
      id: 2,
      label: "Testing & QA",
      icon: allDuas,
      alt: "all duas",
      eventKey: "second",
      imgSrc: Vector,
    },
    {
      id: 3,
      label: "Application Services",
      eventKey: "third",
      icon: allDuas,
      alt: "all duas",
      imgSrc: Vector,
    },
    {
      id: 4,
      label: "Ux/UI Design",
      eventKey: "fourth",
      icon: allDuas,
      alt: "all duas",
      imgSrc: Vector,
    },
    {
      id: 5,
      label: "IT Consultant",
      eventKey: "fifth",
      icon: allDuas,
      alt: "all duas",
      imgSrc: Vector,
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
    var scrollTrigger2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#left-tabs-example",
        start: "30% 50%",
        end: "50% 50%",
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
    scrollTrigger2.fromTo(
      "#child_one",
      {
        x:-500,
      },
      {
        x:0,
      }
    )
    scrollTrigger2.fromTo(
      "#child_two",
      {
        x:1000,
      },
      {
        x:0,
      }
    )
  }, []);

  return (
    <main className="2xl:container grid mx-auto bg_brown_shade">
      <div className="relative min-h-[13rem]">
      <ImageLoader
                    imageUrl={duaBg}
                    className="md:h-auto h-[13rem] "
                    style={{
                    
                      objectFit: "cover",
                   
                    }}
                  />
        {/* <img loading="lazy" src={duaBg} alt="prayer" className="md:h-auto h-[13rem]" /> */}
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p id="duas_head" className="gilroy-bold md:text-4xl text-md mb-0">
              Duas
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
            Duas
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="duas" className="flex flex-col gap-3 mb-16 items-center ">
          <h4 className="text-white gilroy-bold md:text-[37px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Duas
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
        {/* <div className='flex flex-row  gap-3 lg:flex-nowrap flex-wrap'>
                    {
                        prayers?.map((item, index) => {
                            return (
                                <TimeCard key={index} time={item?.time} icon={item?.icon} name={item?.name} />
                            )
                        })
                    }
                </div> */}
        <div className="parent mt-5">
          <div className="px-3">
            <button className="btn_ btn_primary text-xl rounded-full px-[1.2rem] py-[.7rem] mt-4 mb-3">
              <div className="flex gap-1 items-center ">
                <img src={kitab} width="27px" alt="kitab" />
                <p className="m-0 gilroy-bold text-[15px]">All Duas</p>
              </div>
            </button>
          </div>
        
          <Box className="overflow-hidden" display="flex" justifyContent="space-between" flexDirection={{ xs: "column", lg: "row" }} >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Box id="child_one"
          flex={{ xs: "1 1 100%", lg: "1 1 33.33%" }}
          className="child1"
        //   width="100%"
        >
          <div className="child">
            <div className="skill_pointers">
              <Nav className="flex-column navcolor">
                {navItems.map((item) => (
                  <Nav.Item key={item.id} className={`tab${item.id}`}>
                    <Nav.Link
                      onClick={() => {
                        setlink(item.id);
                      }}
                      className={
                        link === item.id ? "active" : `navlinks${item.id}`
                      }
                      eventKey={item.eventKey}
                    >
                      {item.icon ? (
                        <div className="bg-white rounded-xl py-3 px-3 flex justify-between">
                          <div className="flex gap-2 items-center">
                            <img
                              src={item.icon}
                              alt={item.alt}
                              width="30px"
                            />
                            <p className="m-0 text-black inter_bold">
                              {item.label}
                            </p>
                          </div>
                          <div className="flex justify-center items-center">
                            <img src={item.imgSrc} alt="vector" />
                          </div>
                        </div>
                      ) : (
                        item.label
                      )}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          </div>
        </Box>
        <Box id="child_two" className="overflow-hidden" flex={{ xs: "1 1 100%", lg: "1 1 66.67%" }}>
          <Tab.Content>
            {["first", "second", "third", "fourth", "fifth"].map((key, idx) => (
              <Tab.Pane
                key={key}
                style={{ backgroundColor: "transparent" }}
                eventKey={key}
              >
                {duaData?.map((item, index) => (
                  <div className="mb-12 lg:mt-3 mt-7" key={index}>
                    <div className="flex flex-col gap-2 bg-transparent lg:ps-5 ps-4">
                      <div className="rounded-full text-end bg-[#191A19] h-[35px] w-[35px] flex justify-center items-center text-[#AA8555]">
                        {item?.count}
                      </div>
                      <div className="flex flex-col items-end justify-end lg:pe-0 pe-2">
                        <p className="text-[#AA8555] gilroy-bold lg:text-[37px] md:text-[30px] mb-2">
                          {item?.arbi}
                        </p>
                        <p className="text-white lg:w-[52rem] gilroy-medium lg:text-[32px] md:text-[26px] lg:leading-10 leading-normal">
                          {item?.translation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Box>
      </Tab.Container>
    </Box>
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

export default Duas;
