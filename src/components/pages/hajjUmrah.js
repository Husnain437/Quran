import React from "react";
import { Breadcrumb } from "react-bootstrap";
import HajjUmrahBtn from "../common/hajjUmrahBtn";
import { hajjUmmrah1, hajView, namesAllah, } from "../icons/icon";
import Footer from "./footer";
const HajjUmrah = () => {
  return (
    <main className="2xl:container grid mx-auto bg_brown_shade">
      <div className="relative  min-h-[13rem]">
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
        <div className="flex justify-center">
        <img src={hajjUmmrah1} className=" w-full" alt="" />
        </div>
        <div className="flex flex-row flex-wrap lg:justify-between justify-center gap-8 pt-12">
          <HajjUmrahBtn id='1' content="Introduction" />
          <HajjUmrahBtn id='2' content="Umrah Guide & Ritual" />
          <HajjUmrahBtn id='3' content="Hajj Guide & Ritual" />
        </div>
      <div className=" w-full pt-12">
        <img src={hajView} className="max-h-[42rem] w-full" alt="hajView"/>
      </div>
      </div>
      {/* <div className="px-2 pe-4 ">
        <div className="parent ">
          <div></div>
          <div className="md:px-36 px-8">
            <div className="border_gold opacity-55 mt-5 "></div>
          </div>

          <div className="flex justify-center py-8 ">
            <button className="w-full text-[#AC8B49]  ">View more...</button>
          </div>
        </div>
      </div> */}
      <div className="mt-3">
        <Footer />
      </div>
    </main>
  );
};

export default HajjUmrah;
