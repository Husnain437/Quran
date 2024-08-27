/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import RequestModal from '../pages/requestModal';
import "./navbar.css";
// import './NavHeader.css'; // Import the CSS file
// import { arrowdown, deal_Logo, menuicon } from '../icons/icon';
import { Menu as MenuIcon } from "react-feather";

import { ArrowDropDown, SearchRounded } from "@mui/icons-material";
import {
  locationicon,
  more,
  profileavatar,
  zikrLogo
} from "../icons/icon";
// import { Menu, Transition } from '@headlessuireact';

const NavHeader = () => {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("1");
  const [show, setShow] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [open, setopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFeaturesDropdownVisible, setIsFeaturesDropdownVisible] =
    useState(false);

  const [isPlansDropdownVisible, setIsPlansDropdownVisible] = useState(false);
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] =
    useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const isScrollingUp = currentScrollPos > prevScrollPos;
  //     setPrevScrollPos(currentScrollPos);

  //     if (isScrollingUp) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [prevScrollPos]);

  // const prevScrollY = useRef(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementById("navbar");
  //     const scrollPosition = window.scrollY;
  //     if (scrollPosition > prevScrollY.current) {
  //       navbar.style.top = "-80px";
  //     } else {
  //       navbar.style.top = "0";
  //     }
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       navbar.classList.add("nav_shadow");
  //     } else {
  //       navbar.classList.remove("nav_shadow");
  //     }
  //     prevScrollY.current = scrollPosition;
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  function ScrollHandler() {
    const prevScrollY = useRef(0);
  
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            const scrollPosition = window.scrollY;
            if (scrollPosition > prevScrollY.current) {
                navbar.style.top = '-80px';
            } else {
                navbar.style.top = '0';
            }
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                navbar.classList.add('nav_shadow')
            } else {
                navbar.classList.remove('nav_shadow')
            }
            prevScrollY.current = scrollPosition;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render
  
    return null;
  }
  
  const navItems = [
    { id: "1", items: "Quran", path: "/" },
    { id: "2", items: "Tutor", path: "/" },
    { id: "3", items: "Features", path: "/" },
    { id: "4", items: "Qibla", path: "/" },
    { id: "5", items: "Prayer Timing", path: "/prayers" },
    // { id: "5", items: "Location", path: "/" },
    { id: "6", items: "Ayesha", path: "/" },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLinkClick = (itemId) => {
    setSelectedLink(itemId);
    handleClose();
  };

  const handleFeaturesMouseEnter = () => {
    setIsFeaturesDropdownVisible(true);
  };

  const handleFeaturesMouseLeave = () => {
    setIsFeaturesDropdownVisible(false);
  };

  const handlePlansMouseEnter = () => {
    setIsPlansDropdownVisible(true);
  };

  const handlePlansMouseLeave = () => {
    setIsPlansDropdownVisible(false);
  };
  const handleProfileMouseEnter = () => {
    setIsProfileDropdownVisible(true);
  };
  const handleProfileMouseLeave = () => {
    setIsProfileDropdownVisible(false);
  };

  return (
    <>
    <ScrollHandler/>
    <Navbar bg="white" expand="xl" sticky="top" className='main_nav px-4' id="navbar"
            >
        <div className="2xl:container container-fluid"  >
          <Navbar.Brand>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="text_primary"
            >
              {/* <h4 className="text_white mb-0 gilroy-semibold">LOGO</h4> */}
              <img
                src={zikrLogo}
                alt=""
                className="h-[3rem] md:h-[3rem] w-[3rem] rounded-full"
              />
            </Link>
          </Navbar.Brand>
          <div className="relative">
            <SearchRounded
              onClick={toggleModal}
              className="absolute ms-3 text_white md:mt-[10px] xss:-mt-[10px]"
            />
            <input
              type="text"
              style={{ border: "0.6px solid #CFCFCF1D" }}
              className="bg_darksecondary  relative search_input md:block hidden ps-5 pe-3 py-2 rounded-5 text_white"
              placeholder="Search"
              name=""
              id=""
            />
    {/* {isModalOpen && (
        <div
          className="fixed inset-0 bg-transparent flex justify-center mt-8 items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="rounded-lg  max-w-md mt-20 relative w-fit"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >

            <input
              type="text"
              className="w-[] p-2 border rounded-lg"
              placeholder="Search..."
            />
            <div className="absolute right-0 top-0" 
          onClick={() => setIsModalOpen(false)}

            >

           <Trash2 />
            </div>
          </div>
        </div>
      )} */}
          </div>
      
          <Nav className="ms-auto flex">
            <div className="d-none d-xl-flex items-center gap-1">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={
                    item?.items === "Ayesha"
                      ? "text-white nav-item-container"
                      : "nav-item-container text-nowrap"
                  }
                  onMouseEnter={
                    item.items === "Features"
                      ? handleFeaturesMouseEnter
                      : item.items === "Plans"
                      ? handlePlansMouseEnter
                      : item.items === "Ayesha"
                      ? handleProfileMouseEnter
                      : null
                  }
                  onMouseLeave={
                    item.items === "Features"
                      ? handleFeaturesMouseLeave
                      : item.items === "Plans"
                      ? handlePlansMouseLeave
                      : item.items === "Ayesha"
                      ? handleProfileMouseLeave
                      : null
                  }
                >
                  <NavLink
                    className={`nav-link text_white px-3 flex items-center gilroy-medium`}
                    to={item.path}
                    onClick={() => {
                      handleLinkClick(item.id);
                      setIsProfileDropdownVisible(false);
                    }}
                  >
                    <div className="me-1">
                      {item.items === "Ayesha" && (
                        <img src={profileavatar} className="" alt="" />
                      )}
                    </div>
                    {item.items === "Location" && (
                      <img
                        src={locationicon}
                        style={{
                          height: "18px",
                          width: "auto",
                          display: "inline",
                          marginRight: "4px",
                        }}
                        alt=""
                      />
                    )}
                    {item.items}
                    {item.items === "Features" && <ArrowDropDown />}
                    <div className="ms-2">
                      {item.items === "Ayesha" && <img src={more} alt="more" />}
                    </div>
                  </NavLink>
                  {item.items === "Features" && isFeaturesDropdownVisible && (
                    <div className="dropdown-menu show">
                      <ul>
                        {/* <li><Link to="/cma">Learn Quran</Link></li> */}
                        {/* <li><Link to="/idx-websites">Calender</Link></li> */}
                        <li>
                          <Link to="/names">Names of Allah</Link>
                        </li>
                        <li>
                          <Link to="/duas">All Duas</Link>
                        </li>
                        {/* <li><Link to="/marketer">Tasbeeh</Link></li> */}
                        <li>
                          <Link to="/hajj">Hajj & Umrah</Link>
                        </li>
                        <li>
                          <Link to="/learn">Learn Quran</Link>
                        </li>
                        <li>
                          <Link to="/tasbeeh">Tasbeeh</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                  {item.items === "Ayesha" && isProfileDropdownVisible && (
                    <div className="dropdown-menu show">
                      <ul>
                        <li>
                          <Link to="/profile-setting">Setting</Link>
                        </li>
                        <li>
                          <Link to="/idx-websites">Logout</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Navbar.Toggle
                onClick={handleShow}
                className="ms-[8px] border-0 p-0 mb-1"
              >
                {/* <img src={menuicon} alt='' className='w-3/4' /> */}
                <MenuIcon />
              </Navbar.Toggle>
            </div>
          </Nav>
          <Nav>
            <Offcanvas
              placement="top"
              show={show}
              scroll
              onHide={handleClose}
              className="pb-3 min-h-[25rem]  w-full visible"
            >
              <div className="flex justify-between ">
                {/* <img src={deal_Logo} alt="" className='h-[2rem]' /> */}
                <h4 className="text_white mb-0 gilroy-semibold">LOGO</h4>
                <Offcanvas.Header closeButton></Offcanvas.Header>
              </div>
              <Nav className="gap-2 flex items-center w-full justify-center">
                {navItems.map((item, i) => (
                  <NavLink
                    key={i}
                    className={`nav-link gilroy-medium rounded-[10px] px-4`}
                    to={item.path}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.items}
                  </NavLink>
                ))}
              </Nav>
              <div className="d-flex justify-center items-center w-full flex-col mt-2 gap-2">
                <button
                  onClick={() => setopen(true)}
                  className="rounded-5 bg_primary px-4 w-fit py-2 gilroy-bold hover:bg-[#59c4c452] text_white hover:text-[#59c4c4]"
                >
                  GET A DEMO
                </button>
              </div>
            </Offcanvas>
          </Nav>
    
        </div>
      </Navbar>
      {/* <RequestModal modal={open} setmodal={setopen} /> */}
    </>
  );
};

export default NavHeader;
