/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import gsap from "gsap";
import visual from "../assets/png/Visuals.png";
import {
  access_1,
  access_2,
  bgMobile,
  four,
  hands,
  mockup,
  mosque,
  one,
  profile1,
  profile2,
  rating,
  social1,
  social2,
  two,
} from "../icons/icon";
import Accordion from "../common/accordion";
import Footer from "./footer";
import Iphone3dView from "../iphone3d/Iphone3dView";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const Landing = () => {
  const navigate = useNavigate();
  useEffect(() => {
    var tl = gsap.timeline();
    var tl2 = gsap.timeline();
    var scrollTrigger1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#text_2",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
        
      },
    });
    var scrollTrigger2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#mid",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    var scrollTrigger3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#img_3",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    var scrollTrigger4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#hand_div",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
    });
    var scrollTrigger5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#download_app",
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    tl.fromTo(
      "#main_text",
      {
        x: -1100,
      },
      {
        x: 0,
        duration: 1.5,
        delay: 0.5,
      }
    );
    tl2.fromTo(
      "#mob1",
      {
        x: 500,
      },
      {
        x: 0,
        duration: 1.5,
        delay: 0.5,
      }
    );

    scrollTrigger1.fromTo(
      "#text_3",
      {
        x: -200,
      },
      {
        x: 0,
      }
    );
    scrollTrigger1.fromTo(
      "#image_two",
      {
        x: 200,
        opacity: 0,
        scale: 0,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
      },
      0
    );
    scrollTrigger2.fromTo(
      "#msq",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
    scrollTrigger2.fromTo(
      "#info",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },0
    );
    scrollTrigger3.fromTo(
      "#img_under",
      {
        scale: 0,
      },
      {
        scale: 1,
      }
    );
    // scrollTrigger4.fromTo(
    //   "#hand_img",
    //   {
    //     rotateZ: 100,
    //   },
    //   {
    //     rotateZ: 0,
    //   }
    // );
    scrollTrigger5.fromTo(
      "#lower_phone",
      {
        scale: 2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );

    gsap.to("#hand_div", {
      scrollTrigger: {
        trigger: "#hand_div",
        start: "top center",
        onEnter: () => {
          gsap.fromTo(
            "#hand_img",   
            { rotateZ:100 },  
            { opacity:1,rotateZ:0, duration: 1.5,  }  
          );
        },
        once: true,
      },
    });
  }, []);
  const images = [
    {
      src: one,
    },
    {
      src: two,
    },
    {
      src: four,
    },
  ];
  const accordionData = [
    {
      count: "1",
      head: "What technologies do you specialize in?",
      para: "I specialize in modern web development technologies including React, Node.js, and TypeScript. I also have experience with database management using MySQL and ORM tools like Prisma.",
    },
    {
      count: "2",
      head: "Can you build custom web applications?",
      para: "Absolutely! I can build custom web applications tailored to your specific needs. From front-end design to back-end development, I ensure the application is robust and scalable.",
    },
    {
      count: "3",
      head: "How do you ensure code quality?",
      para: "I follow best practices in software development, including writing clean, maintainable code and implementing thorough testing. I also perform regular code reviews and refactoring to improve code quality.",
    },
    {
      count: "4",
      head: "Do you offer maintenance and support?",
      para: "Yes, I offer ongoing maintenance and support for the projects I develop. This includes fixing bugs, adding new features, and ensuring the application runs smoothly over time.",
    },
    {
      count: "5",
      head: "What is your approach to project management?",
      para: "I use agile methodologies to manage projects effectively. This allows for flexibility, continuous improvement, and collaboration with clients to ensure their requirements are met and the project is delivered on time.",
    },
  ];
  const cardData = [
    {
      profile: profile1,
      name: "Louren M.",
      para: "Anima’s Landing Page UI Kit has become a  staple in my design toolkit. This kit has everything I need to get the job done quickly and  efficiently.",
      rating: [5],
    },
    {
      profile: profile2,
      name: "David B.",
      para: "“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”",
      rating: [5],
    },
  ];
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionToggle = (accordionNumber) => {
    setOpenAccordion(
      openAccordion === accordionNumber ? null : accordionNumber
    );
  };
  return (
    <React.Fragment>
      <section className="bg_brown_shade overflow-hidden  ">
        <Container fluid="lg" className="text_white">
          {/* <div className="md:flex flex-col  "> */}
          <div className="banner-main flex items-center max-[1540px]:h-[100vh] max-[921px]:h-auto  min-[1540px]:min-h-[46.9rem]  py-4  ">
            <div
              id="main_text"
              className="min-[1440px]:max-w-[887px] max-[1440px]:max-w-[700px] max-[921px]:m-auto max-[1200px]:max-w-[500px] max-[1100px]:max-w-[500px]  "
            >
              <h5 className=" gilroy-bold mb-4 pb-3 font xxl">
                Journey Through the Quran: <br /> Seamless Reading and Learning
                Experience
              </h5>
              <p className="text-[26px] max-w-[586px] mb-4 pb-3 leading-[31.54px]">
                Dive into the timeless wisdom of the Quran with our intuitive
                and feature-rich app.git
              </p>
              <div>
                <button
                  onClick={() => navigate("/home")}
                  className="btn_ btn_primary text-xl"
                >
                  Explore
                </button>
              </div>
            </div>
            <div id="mob1" className="max-[921px]:m-auto">
              {/* <img src={bgMobile} alt="mobile" /> */}
              <Iphone3dView />
            </div>
          </div>
        </Container>
      </section>
      <section id="access_quran" className="bg-dark_brown py-12">
        <Container fluid="lg" className="text_white">
          <div id="text_2" className="flex md:flex-row gap-10  flex-col">
            <div id="text_3" className=" ">
              <div className="flex flex-col mt-24 xl:w-[30rem] lg:max-w-[26rem] max-[1200px]:w-[23rem] w-auto max-[921px]:m-auto   ">
                <h4 className="font xxl text-white line_height gilroy-bold ">
                  Access Quran anytime, anywhere
                </h4>
                <p className="py-4 xl:w-[30rem] lg:max-w-[23rem] w-auto  gilroy-light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus semper habitant arcu eget. Et integer
                  facilisi eget diam.Lorem ipsum dolor
                </p>
                <div>
                  <button className="btn_ btn_primary text-xl">Explore</button>
                </div>
              </div>
            </div>
            <div className="">
              <div
                id="image_two"
                className="flex gap-3 md:flex-row flex-col justify-center"
              >
                <div>
                  <img
                    src={access_1}
                    alt="access_1"
                    className="max-w-[300px] max-[921px]:m-auto max-[1170px]:w-[15rem] max-[961px]:w-[12rem] max-[850px]:w-[10em]"
                  />
                </div>
                <div>
                  <img
                    src={access_2}
                    alt="access_2"
                    className="max-w-[300px] max-[921px]:m-auto max-[1170px]:w-[15rem] max-[961px]:w-[12rem] max-[850px]:w-[10em]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="mid" className="flex md:flex-row gap-36   flex-col">
            <div id="msq" className=" pt-16">
              <img src={mosque} alt="mosque" />
            </div>
            <div
              id="info"
              className="flex flex-col gap-4 md:items-start items-center"
            >
              <div className="border_"></div>
              <div className="flex md:items-start items-center flex-col ">
                <h5 className="gilroy-bold">01</h5>
                <p className="lg:max-w-[23rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>
              </div>{" "}
              <div className="flex flex-col">
                <h5 className="gilroy-bold">02</h5>
                <p className="lg:max-w-[23rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>
              </div>
              <div className="flex flex-col">
                <h5 className="gilroy-bold">03</h5>
                <p className="lg:max-w-[23rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus in libero risus
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-center g-3 pt-9" id="img_3">
            {images?.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4 col-md-6 col-12  ">
                    <img
                      id="img_under"
                      className=" h-[260px] mx-auto"
                      alt="three_images"
                      style={{
                        maxWidth: "412px",
                        width: "100%",
                      }}
                      src={item?.src}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </Container>
      </section>
      <section id="zikar_app" className="bg_primary py-12 overflow-hidden">
        <Container fluid="lg" className="text_white">
          <div className="row gap-0 ">
            <div className="col-md-5 col-12 ">
              <div className="flex flex-col   ">
                <h4 className="font xxl text-white line_height gilroy-bold ">
                  About Zikr App
                </h4>
                <p className="py-4 xl:w-[30rem] lg:max-w-[24rem]  gilroy-light ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus imperdiet sed id elementum. Quam vel aliquam sit
                  vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit
                  vulputate.
                </p>
                <div>
                  <button className="btn_ btn_primary text-xl">
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 col-12 md:items-start items-center"
              id="hand_div"
            >
              <img
                id="hand_img"
                src={hands}
                alt="hands"
                className="max-[1201px]:m-auto  m-auto"
                style={{opacity:0}}
              />
            </div>
          </div>
        </Container>
      </section>
      <section id="testimonials" className="bg_primary py-12">
        <Container fluid="lg" className="text_white">
          <div className="flex flex-col justify-center  items-center pb-14">
            <h5 className="gilroy-bold text-2xl">Testimonials</h5>
            <p className="md:text-start text-center">
              See how our App is making an impact on our customers life
            </p>
          </div>

          <div className="flex lg:flex-row flex-col gap-4 flex-nowrap justify-center items-center ">
            {cardData?.map((item, index) => {
              return (
                <>
                  <div
                    style={{ border: "1px solid rgba(133, 86, 27, 0.2)" }}
                    key={index}
                    className="bg-[#101213] md:max-w-[27rem] max-w-[39rem] md:mx-0 sm:mx-auto  flex items-center justify-center  px-4  text-white rounded-2xl  "
                  >
                    <div className="flex items-center justify-center md:gap-11 gap-7 text-white  pb-8">
                      <div className="flex flex-col  pt-4 gap-3 ">
                        <img
                          alt="profile"
                          className="w-[6rem]"
                          src={item.profile}
                        />
                        <h4 className="gilroy-bold text-lg whitespace-nowrap">
                          {item?.name}
                        </h4>
                      </div>

                      <div className=" ">
                        <div className="flex flex-row gap-2 py-3">
                          {item?.rating?.map((item, index) => {
                            return (
                              <img
                                width="20px"
                                style={{ height: "20px" }}
                                src={rating}
                                alt="rating"
                              />
                            );
                          })}
                        </div>
                        <div className="text-sm">{item?.para}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="border_gold mt-5  opacity-55"></div>

          <div className="flex justify-center pt-8">
            <button className="w-full text-[#AC8B49] bg-">View more...</button>
          </div>
        </Container>
      </section>
      <section id="download_app" className="bg_primary overflow-hidden py-12">
        <Container fluid="lg" className="text_white">
          <div className="flex md:flex-row md:justify-center md:items-center flex-col ">
            <div className="flex flex-col gap-4   items-center pb-6">
              <h5 className="gilroy-bold lg:text-4xl ps-4 md:text-2xl leading-[3rem] md:w-[30rem] ">
                Download the Interactive Zikr App
              </h5>
              <p className=" md:w-[27rem] md:text-start text-center ">
                Tap into a wealth of knowledge with translations, tafsir, and
                audio recitations at your fingertips.
              </p>
              <div className="flex flex-row md:flex-nowrap flex-wrap items-center justify-center gap-3">
                <button className="social_plateform_btn  btn_ btn_primary">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <img src={social1} alt="playstore icon" width="24px" />
                    <div className="flex flex-col text-start justify-start gap-0">
                      <p className="gilroy-light opacity-55 m-0 p-0 text-xs">
                        Get it on
                      </p>
                      <h4 className="gilroy-medium m-0 p-0 text-sm">
                        Google Play
                      </h4>
                    </div>
                  </div>
                </button>
                <button className="social_plateform_btn  btn_ btn_primary">
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <img src={social2} alt="playstore icon" width="24px" />
                    <div className="flex flex-col text-start justify-start gap-0">
                      <p className="gilroy-light opacity-55 m-0 p-0 text-xs">
                        Get it on
                      </p>
                      <h4 className="gilroy-medium m-0 p-0 text-sm">
                        Apple Store
                      </h4>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="">
              <img
                id="lower_phone"
                alt="mockup"
                src={mockup}
                style={{ width: "35rem" }}
              />
            </div>
          </div>
        </Container>
      </section>
      <section id="faq">
        <Container fluid="lg" className="text_white">
          <div className=" w-full">
            <div className="pt-12 lg:w-[62rem] w-auto mx-auto justify-center md:pb-0 pb-5">
              <div className="flex flex-col items-center justify-center">
                <h4 className="mt-4 mb-3 gilroy-bold text-white">
                  Frequently Asked Questions
                </h4>
                <p className="gilroy-light mb-7 text-sm md:text-start text-center">
                  See how our App is making an impact on our customers life
                </p>
              </div>
              <div className="flex flex-col  gap-3 justify-center w-full ">
                {accordionData.map((item) => (
                  <Accordion
                    key={item.count}
                    isOpen={openAccordion === item.count}
                    onToggle={handleAccordionToggle}
                    count={item.count}
                    head={item.head}
                    para={item.para}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
