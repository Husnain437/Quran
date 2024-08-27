import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useParams } from "react-router-dom";
import HajUmrahDetail from "../common/hajUmrahDetail";
import {
  hajGuide,
  hajIntro,
  hajjUmmrah1,
  namesAllah,
  umrahGuide
} from "../icons/icon";
import Footer from "./footer";
const HajjUmrahDetail = () => {
  const params = useParams();
  console.log(params.id, "ppp");
  return (
    <main className="2xl:container grid mx-auto bg_brown_shade">
      <div className="relative">
        <img src={namesAllah} alt="prayer" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p className="gilroy-bold md:text-4xl  text-md mb-0">
              Hajj & Umrah
            </p>
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
            Hajj & Umrah
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Hajj & Umrah
          </h4>
          <p className="text-white md:w-[40rem] text-center md:text-[16px] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            Et integer facilisi eget diam.Lorem ipsum dolor
          </p>
        </div>

        <img src={hajjUmmrah1} alt="" />

        {params?.id === "1" ? (
          <>
            <section className="mt-16">
              <div className="flex flex-col gap-2 text-white ">
                <h4 className="text-[40px] gilroy-medium">Introduction</h4>
                <p className="pb-4 text-[20px] text-[#A8A8A8]">
                  History and virtues
                </p>
                <img src={hajIntro} alt="haj_intro" />
                <div className="pt-8 pb-11">
                  <p>
                    Hajj and Umrah are really important pilgrimages in Islam.
                    Hajj is like a big pilgrimage that Muslims are supposed to
                    do at least once <br /> in their lifetime if they're able
                    to. It happens every year in Mecca during a specific month.
                    Umrah is a smaller pilgrimage that you can do anytime during
                    the year—it's optional but still really special. Both of
                    these journeys involve certain rituals and visiting sacred
                    places. They're a chance for Muslims from all over to come
                    together in worship and reflection, strengthening our sense
                    of community and faith.
                  </p>
                  <div className="md:px-36 px-5 ">
                    <div className="border_gold opacity-55 mt-5 "></div>
                  </div>
                  <div className="flex justify-center py-8 ">
                    <button className="w-full text-[#AC8B49]  ">
                      View more...
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : params?.id === "2" ? (
          <>
            <HajUmrahDetail mainPara= "Hajj and Umrah are really important pilgrimages in Islam. Hajj is like a big pilgrimage that Muslims are supposed to do at least once in their lifetime if they're able to. It happens every year in Mecca during a specific month. Umrah is a smaller pilgrimage that you can do anytime during the year—it's optional but still really special. Both of these journeys involve certain rituals and visiting sacred places. They're a chance for Muslims from all over to come together in worship and reflection, strengthening our sense of community and faith." 
            img={umrahGuide} para="How to Perform Umrah" />
          </>
        ) : (
          <section>
            <HajUmrahDetail mainPara="Hajj and Umrah are really important pilgrimages in Islam. Hajj is like a big pilgrimage that Muslims are supposed to do at least once in their lifetime 
if they're able to. It happens every year in Mecca during a specific month. Umrah is a smaller pilgrimage that you can do anytime during the year—it's optional but still really special. Both of these journeys involve certain rituals and visiting sacred places. 
They're a chance for Muslims from all over to come together in worship and reflection, strengthening our sense of community and faith." img={hajGuide} para="How to Perform Hajj" />
          </section>
        )}
      </div>

      <div className="mt-3">
        <Footer />
      </div>
    </main>
  );
};

export default HajjUmrahDetail;
