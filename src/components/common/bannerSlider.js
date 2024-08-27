import gsap from "gsap";
import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { greater, lesser } from '../icons/icon';


const BannerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const tutorsLength = [1, 2, 3, 4, 5];
  useEffect(() => {
    
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
  }, []);
  return (
    <div>
      <Swiper
        className=" min-[1540px]:max-w-[100rem]  max-w-[98vw]  "
        style={{overflowX:"hidden"}}
        slidesPerView={1}
        // spaceBetween={30}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {tutorsLength?.map((slideContent, index) => (
          <SwiperSlide
            className="w-full"
            key={`slide-${index}`}
            virtualIndex={index}
          >
            <section id="banner">
              <div className="bg-img-hero">
                <Container className="text_white">
                  <div className="relative w-fit">
                    <div id='ayesha' className="flex flex-col items-start absolute top-36 sm:left-28 left-32 w-[20rem]">
                      <p className="text-lg gilroy-medium opacity-45 mb-0">
                        Assalam 0 Alikum
                      </p>
                      <h5 className="gilroy-bold text-3xl">Ayesha!</h5>
                    </div>
                  </div>
                  <div className="flex flex-col items-center max-[1540px]:min-h-[100vh] min-[1540px]:min-h-[46.9rem] h-auto py-4">
                    <div id='exp' className="flex flex-col items-center mt-72">
                      <h5 className="gilroy-bold mb-4 lg:text-5xl text-center leading-10 pb-3">
                        Journey Through the Quran: Seamless <br />
                        Reading and Learning Experience
                      </h5>
                      <p className="m-0 md:text-start text-center">
                        Dive into the timeless wisdom of the Quran with our
                        intuitive and feature-rich app.
                      </p>
                      <button className="btn_ btn_primary text-xl mt-6">
                        Explore
                      </button>
                    </div>
                  </div>
                </Container>
              </div>
            </section>
          </SwiperSlide>
        ))}
        <div ref={prevRef} className="custom-swiper-button-prev_banner">
          <img width="10px" alt="left" src={lesser} />
        </div>
        <div ref={nextRef} className="custom-swiper-button-next_banner">
          <img width="10px" alt="right" src={greater} />
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
