import { Box, Disc, Home, Layers } from "react-feather";
import { default as blog1, default as blog9 } from "../assets/blog/01.jpg";
import blog2 from "../assets/blog/02.jpg";
import blog3 from "../assets/blog/03.jpg";
import blog4 from "../assets/blog/04.jpg";
import blog5 from "../assets/blog/05.jpg";
import blog6 from "../assets/blog/06.jpg";
import blog7 from "../assets/blog/07.jpg";
import blog8 from "../assets/blog/08.jpg";
import one from "../assets/png/1.png";
import alQuran from "../assets/png/alQuran.jpg";
import contact_ from "../assets/png/contact_.png";
import tasbeeh from "../assets/png/tasbeeh.png";

import down from "../assets/png/down-arrow.png";
import duaChild from "../assets/png/duaChild.png";
import duaimage from "../assets/png/duaimage.png";
import duasbg from "../assets/png/duasbg.png";
import expe from "../assets/png/expe.png";
import facebook from "../assets/png/fb_zikr.png";
import hajGuide from "../assets/png/hajGuide.png";
import hajIntro from "../assets/png/hajIntro.png";
import hajjImage from "../assets/png/hajjImage.png";
import hajjUmmrah1 from "../assets/png/hajjUmmrah1.png";
import hajView from "../assets/png/hajView.png";
import hands from "../assets/png/hands.png";
import lesser from "../assets/png/less-than.png";
import Loc_ from "../assets/png/Loc_.png";
import locationicon from "../assets/png/locationicon.png";
import mail_ from "../assets/png/mail_.png";
import mockup from "../assets/png/Mockup.png";
import more from "../assets/png/More.png";
import moreicon from "../assets/png/moreicon.png";
import namesAllah from "../assets/png/names.jpg";
import names from "../assets/png/names.png";
import prayerBg from "../assets/png/prayerBg.jpg";
import profile1 from "../assets/png/profile1.png";
import profile2 from "../assets/png/profile2.png";
import profileavatar from "../assets/png/profileAvatar.png";
import image1 from "../assets/png/qFeature.png";
import image2 from "../assets/png/qFeature1.png";
import image3 from "../assets/png/qFeature2.png";
import rated from "../assets/png/rated.png";
import rating from "../assets/png/rating.png";
import rehman from "../assets/png/rehman.png";
import greater from "../assets/png/right.png";
import social1 from "../assets/png/social1.png";
import social2 from "../assets/png/social2.png";
import zikrProfile from "../assets/png/zikrProfile.png";

import tasbeehbanner from "../assets/png/tasbeeh.jpg";

import tasbeehMain from "../assets/png/tasbeehmain.jpg";
import tasbeehbgmain from "../assets/png/tassbeehbgmain.png";


import tasbeehbg from "../assets/png/tasbeehbg.png";
import reciteTasbeeh from "../assets/png/reciteTasbeeh.jpg";
import tik_tok from "../assets/png/tik_tok.png";
import umrahGuide from "../assets/png/umrahGuide.png";
import upper from "../assets/png/upper.png";
import bgMobile from "../assets/png/Visuals.png";
import x from "../assets/png/x.png";
import zikr_profile from "../assets/png/zikr_profile.png";
import access_1 from "../assets/svg/access_1.svg";
import access_2 from "../assets/svg/access_2.svg";
import mosque from "../assets/svg/mosque.svg";
import two from "../assets/png/2.png";
import four from "../assets/png/4.png";
import allDuas from "../assets/png/allDuas.png";
import asar from "../assets/png/asar.png";
import bismillahbg from "../assets/png/bismillahbg.png";
import duaBg from "../assets/png/duaBg.jpg";
import setting from "../assets/png/setting.jpg";
import editIcon from "../assets/png/editIcon.png";


import fajar from "../assets/png/fajar.png";
import kitab from "../assets/png/kitab.png";
import learnQ from "../assets/png/learnQ.png";
import magrib from "../assets/png/magrib.png";
import Vector from "../assets/png/Vector.png";
import zikrLogo from "../assets/png/zikrLogo.jpeg";
const menuItems = [
  {
    icon: <Home size={20} />,
    label: "Home",
    path: "/",
    exact: true,
  },
  {
    label: "Patient",
    icon: <Box size={20} />,
    submenu: [
      {
        label: "Patient List",
        path: "/list-patient",
        icon: <Disc size={20} />,
        exact: false,
      },
      {
        label: "Checked Patient",
        path: "/checked-patient",
        icon: <Disc size={20} />,
        exact: false,
      },
    ],
  },
  {
    label: "Patient Info",
    icon: <Layers size={20} />,
    submenu: [
      {
        label: "Manage Patient",
        icon: <Disc size={20} />,
        path: "/manage-patient",
        exact: false,
      },
    ],
  },
];

export {
  access_1,
  access_2,
  allDuas,
  alQuran,
  asar,
  bgMobile,
  bismillahbg,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  contact_,
  down,
  duaBg,
  editIcon,
  duaChild,
  duaimage,
  duasbg,
  expe,
  facebook,
  fajar,
  four,
  greater,
  hajGuide,
  setting,
  hajIntro,
  hajjImage,
  hajjUmmrah1,
  hajView,
  hands,
  image1,
  image2,
  image3,
  kitab,
  learnQ,
  lesser,
  Loc_,
  locationicon,
  magrib,
  mail_,
  menuItems,
  mockup,
  more,
  moreicon,
  mosque,
  names,
  namesAllah,
  one,
  prayerBg,
  profile1,
  profile2,
  profileavatar,
  rated,
  rating,
  rehman,
  social1,
  social2,
  tasbeeh,
  tasbeehbg,
  tik_tok,
  two,
  umrahGuide,
  upper,
  reciteTasbeeh,
  Vector,
  x,
  zikrProfile,
  zikr_profile,
  zikrLogo,
  tasbeehbgmain,
  tasbeehbanner,
  tasbeehMain
};
