// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import { duaimage } from "../icons/icon";
// import { Card } from "antd";

// const VerseSlider = () => {
//   const carouselItems = [1, 2, 3];
//   return (
//     <div>
//       <Carousel className="relative">
//         {carouselItems.map((item, index) => (
//           <Carousel.Item key={index}>
//             <div className="row">
//               <div className="card_dua col-md-5 col-12 relative w-fit">
//                 <Card
//                   className="bg-[#212121] h-[200px] py-2 lg:w-[40rem] px-1 absolute top-40 left-16"
//                   style={{
//                     borderLeft: "6px solid #AA8555",
//                     borderRight: "0px",
//                     borderTop: "0px",
//                     borderBottom: "0px",
//                   }}
//                 >
//                   <p className="text-end gilroy-medium text_secondary text-md">
//                     اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
//                   </p>
//                   <p className="text-white popins-medium">
//                     [All] praise is [due] to Allah, Lord of the worlds -
//                   </p>
//                   <p className="text-white gilroy-medium text_secondary text-md">
//                     Ar-Rahmaanir-Raheem
//                   </p>
//                 </Card>
//               </div>
//               <div className="image_section col-md-7 col-12">
//                 <img src={duaimage} alt="dua_image" />
//               </div>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default VerseSlider;
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { duaimage } from "../icons/icon";
import { Card } from "antd";
const VerseSlider = () => {
  const carouselItems = [1, 2, 3];
  return (
    <div>
      <Carousel className="relative">
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              <div className="card_dua col-md-5 col-12">
                <Card
                  className="bg-[#212121] h-[200px] py-2 lg:w-[40rem] px-1 absolute top-40 left-16"
                  style={{
                    borderLeft: "6px solid #AA8555",
                    borderRight: "0px",
                    borderTop: "0px",
                    borderBottom: "0px",
                  }}
                >
                  <p className="text-end gilroy-medium text_secondary text-md">
                    اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ
                  </p>
                  <p className="text-white popins-medium">
                    [All] praise is [due] to Allah, Lord of the worlds -
                  </p>
                  <p className="text-white gilroy-medium text_secondary text-md">
                    Ar-Rahmaanir-Raheem
                  </p>
                </Card>
              </div>
              <div className="image_section col-md-7 col-12">
                <img src={duaimage} alt="dua_image" />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export default VerseSlider;