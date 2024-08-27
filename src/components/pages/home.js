/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Card, Container } from "react-bootstrap";
import {
  down,
  duaChild,
  greater,
  hajjImage,
  image1,
  image2,
  image3,
  lesser,
  tasbeeh,
  upper,
} from "../icons/icon";
import TutorCard from "../common/tutorCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import VerseSlider from "../common/verseSlider";
import Footer from "./footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerSlider from "../common/bannerSlider";
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const tutorsLength = [1, 2, 3, 4, 5];
  const featuresQuran = [
    {
      content: "Learn quick Quran Classes",
      img: image1,
    },
    {
      content: "Tested and approved tutors",
      img: image2,
    },
    {
      content: "Online Arabic Classes For Everyone",
      img: image3,
    },
  ];
  const items = [
    {
      title: "Learn Quran",
      subtitle: "How to recite Quran",
      bgClass: "bg_image1",
      col: 6,
    },
    {
      title: "Calendar",
      subtitle: "Important islamic dates",
      bgClass: "bg_image2",
      col: 6,
    },
    {
      title: "Names of Allah",
      imgSrc: hajjImage,
      bgClass: "bg_image1_child1",
      col: 3,
    },
    {
      title: "All Duas",
      imgSrc: tasbeeh,
      bgClass: "bg_image2_child2",
      col: 3,
    },

    {
      title: "Hajj & Umrah",
      imgSrc: duaChild,
      bgClass: "bg_image2_child1",
      col: 3,
    },
    {
      title: "Tasbeeh",
      imgSrc: tasbeeh,
      bgClass: "bg_image2_child2",
      col: 3,
    },
  ];

  useEffect(() => {
    var scrollTrigger1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#zikr_features",
        start: "top 80%",
        end: "+=500",
        scrub: true,
     
      },
    });
    var scrollTrigger2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#zikr_offerings",
        start: "top 90%",
        end: "-=150",
        scrub: true,
        
       
      },
    });
    var scrollTrigger3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#verse",
        start: "top 80%",
        end: "+=150",
        scrub: true,
        
      },
    });
    var scrollTrigger4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#learn",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
        
        
      },
    });
    var scrollTrigger5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#offers",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
        
        
      },
    });
    var tl = gsap.timeline();
    tl.fromTo(
      "#ayesha",
      {
        x: 200,
        scale: 0,
      },

      {
        x: 0,
        duration: 2,
        scale: 1,
      }
    );
    tl.fromTo(
      "#exp",
      {
        x: -1200,
      },
      {
        x: 0,
        duration: 2,
      },
      0
    );
    scrollTrigger2.fromTo(
      "#offering",
      {
        scale:0,
      },
      {
        scale:1,
      }
    );
    scrollTrigger1.fromTo(
      "#feature",
      {
        x:600,
      },
      {
        x:0,
      }
    )
    scrollTrigger3.fromTo(
      "#verse_head",
      {
        y:-100,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
      }
    )
    scrollTrigger3.fromTo(
      "#verse_text",
      {
        y:100,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
      },0
    )
    scrollTrigger4.fromTo(
      "#learning_text",
      {
        y:100,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
      }
    )
    scrollTrigger5.fromTo(
      "#offer_text",
      {
        y:100,
        opacity:0,
      },
      {
        y:0,
        opacity:1,
      }
    )
    

  }, []);
  return (
    <React.Fragment>
      <div className="2xl:container grid mx-auto">
       
   <BannerSlider/>
        <section id="zikr_features" className="bg-features">
          <div className="w-full opacity-60 px-6 py-20  ">
            <div className="bg_brown p-6 rounded-lg flex justify-center">
              <div className="flex lg:flex-row flex-col gap-8 overflow-hidden">
                {featuresQuran?.map((item, index) => {
                  return (
                    <div id="feature"
                      key={index}
                      className="flex flex-row gap-3 items-center text-white"
                    >
                      <img
                        id="feature_div"
                        alt={index}
                        width="90px"
                        src={item.img}
                      />
                      <h3 className="gilroy-medium text-lg ">
                        {item?.content}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="zikr_offerings" className="bg-features ">
          <div id="offers" className="flex flex-col items-center pt-28 pb-12">
            <h5 id="offer_text" className="text_secondary text-sm">WHAT WE OFFER</h5>
            <h3 id="offer_text" className="text-white gilroy-regular">Zikr App Features</h3>
          </div>
          <div className="flex justify-center">

          <div id="offering" className="row w-full justify-center lg:px-32 px-20 xss:px-4 pb-32">
            {items.map((item, index) => (
              <div
                key={index}
                className={`col-md-${item.col} ${item.col === 6 ? "my-4" : "col-12 mb-4"}`}
              >
                <div
                  className={`h-[180px] w-full relative p-4 text-white rounded-lg flex items-center justify-center ${item.bgClass}`}
                >
                  <div
                    className={`absolute ${
                      item.imgSrc ? "top-7" : "top-3"
                    } left-5`}
                  >
                    {item.imgSrc && <img src={item.imgSrc} alt={item.title} />}
                    <div
                      className={`mt-3 text-lg ${
                        item.imgSrc ? "gilroy-bold" : "font-bold mb-2"
                      }`}
                    >
                      {item.title}
                    </div>
                    {item.subtitle && (
                      <div className="text-sm">{item.subtitle}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
        <section id="zikr_learnings" className="bg-features pb-32 ">
          <div id="learn" className="flex flex-col items-center pt-28 pb-12">
            <h5 id="learning_text" className="text_secondary text-sm">Online Quran learning</h5>
            <h3 id="learning_text" className="text-white gilroy-regular">Our Top Tutors</h3>
          </div>
          <Swiper
            className=" min-[1540px]:max-w-[90rem]  max-w-[97vw] "
            onSwiper={setSwiperRef}
            slidesPerView={"auto"}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {tutorsLength?.map((slideContent, index) => (
              <SwiperSlide
                className="w-auto"
                key={`slide-${index}`}
                virtualIndex={index}
              >
                <TutorCard />
              </SwiperSlide>
            ))}
            <div ref={prevRef} className="custom-swiper-button-prev ">
              <img width="10px" alt="right" src={lesser} />
            </div>
            <div ref={nextRef} className="custom-swiper-button-next   ">
              <img width="10px" alt="left" src={greater} />
            </div>
          </Swiper>
        </section>
        <section id="zikr_learnings" className="bg-features pb-32 ">
          <div id="verse" className="flex flex-col items-center pt-28 pb-12">
            <h5 id="verse_head" className="text-white text-3xl gilroy-bold">Today’s Verse</h5>
            <p id="verse_text" className="text-white gilroy-regular lg:max-w-[42rem] w-auto text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.Lorem ipsum dolor
            </p>
          </div>
          <VerseSlider />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
