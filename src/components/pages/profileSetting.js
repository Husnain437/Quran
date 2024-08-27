import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { editIcon, setting, zikrProfile } from "../icons/icon";
import Footer from "./footer";
gsap.registerPlugin(ScrollTrigger);
const ProfileSetting = () => {
  const [form, setForm] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    city: "San Jose",
    country: "USA",
    timezone: "Pakistan Standard Time (GMT+5)",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Form Data:", form);
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
        <img src={setting} alt="tasbeeh" className="md:h-auto h-[13rem]" />
        <div className="absolute top-36 md:left-20 sm:left-16 left-9">
          <div className="flex flex-col gap-0  text-white">
            <p id="duas_head" className="gilroy-bold md:text-4xl  text-md mb-0">
              Setting
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
            Setting
          </Breadcrumb.Item>
        </Breadcrumb>
        <div id="duas" className="flex flex-col gap-3 mb-16 items-center">
          <h4 className="text-white gilroy-bold md:text-[48px] text-[25px] md:pb-4 pb-1 md:text-start text-center">
            Setting
          </h4>
          <p className="text-white md:w-[40rem] text-center md:text-[16px] text-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer facilisi eget
            diam.Lorem ipsum dolorLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
            Et integer facilisi eget diam.Lorem ipsum dolor
          </p>
        </div>
        <div className="w-full bg_brown_shade text-white p-6 rounded-lg shadow-lg">
          <div style={{ borderBottom: "1px solid rgba(170, 133, 85, 0.1) " }}>
            <p
              className="w-fit px-5 pb-2"
              style={{ borderBottom: "3px solid #AA8555" }}
            >
              Account
            </p>
          </div>
          <div className="flex md:flex-row xss:flex-col gap-3 pt-9 md:ps-4">
            <div className="">
              <div className="relative w-fit ">
                <img
                  src={zikrProfile}
                  alt="Profile"
                  className="w-50 h-70 rounded-full object-cover"
                />
                <div className="w-fit absolute bottom-3 left-20  cursor-pointer" onClick={()=>alert('edit your profile')}>
                  <img src={editIcon} alt="edit" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <form className="w-full">
                <div className="flex sm:flex-row xss:flex-col  w-full gap-4 mb-4">
                  <div className="w-full">
                    <label className="block gilroy-regular ">Your Name</label>
                    <input
                      style={{ border: "1px solid #FFFFFF59" }}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>{" "}
                  <div className="w-full">
                    <label className="block gilroy-regular">User Name</label>
                    <input
                      type="text"
                      style={{ border: "1px solid #FFFFFF59" }}
                      name="name"
                      value={form.username}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row xss:flex-col w-full gap-4 mb-4">
                  <div className="w-full">
                    <label className="block gilroy-regular">Email</label>
                    <input
                      type="text"
                      style={{ border: "1px solid #FFFFFF59" }}
                      name="name"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>{" "}
                  <div className="w-full">
                    <label className="block gilroy-regular">Time Zone</label>
                    <input
                      style={{ border: "1px solid #FFFFFF59" }}
                      type="text"
                      name="name"
                      value={form.timezone}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>
                </div>{" "}
                <div className="flex sm:flex-row xss:flex-col w-full gap-4 mb-4">
                  <div className="w-full ">
                    <label className="block gilroy-regular">City</label>
                    <input
                      style={{ border: "1px solid #FFFFFF59" }}
                      type="text"
                      name="name"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full bg-[#151513] rounded-lg p-2 mt-1"
                    />
                  </div>{" "}
                  <div className="w-full">
                    <label className="block gilroy-regular">Country</label>
                    <input
                      type="text"
                      style={{ border: "1px solid #FFFFFF59" }}
                      name="name"
                      value={form.country}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>
                </div>{" "}
              </form>
            </div>
          </div>
          <div className="border_gold my-3"></div>
          <p className="md:ps-4">
        Change Password
        </p>
        <div className="flex justify-end md:flex-row xss:flex-col xss:items-center gap-4  my-4  ">
                  <div className="md:w-[30rem] xss:w-full">
                    <label className="block gilroy-regular ">Password</label>
                    <input
                      style={{ border: "1px solid #FFFFFF59" }}
                      type="password"
                      name="name"
                      // value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>{" "}
                  <div className="md:w-[30rem] xss:w-full">
                    <label className="block gilroy-regular">New Password</label>
                    <input
                      type="password"
                      style={{ border: "1px solid #FFFFFF59" }}
                      name="name"
                      // value={form.username}
                      onChange={handleChange}
                      className="w-full bg-[#151513]  rounded-lg p-2 mt-1"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-11 mb-4">

                <button style={{border:"1px solid #AA8555"}} className="px-[4rem] py-[.5rem] rounded-md text-white">Save</button>
                </div>
        </div>
      
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
};

export default ProfileSetting;
