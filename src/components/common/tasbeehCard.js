import React from "react";
import { useNavigate } from "react-router-dom";

const TasbeehCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row xss:flex-col md:items-start gap-6 xss:items-center md:justify-between xss:justify-center text-white mb-5 border-b pb-4 border-[#2e2822]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[30px] gilroy-medium ">AR-RAHMAAN</h4>
        {props.recite ? (
          <p className="text-[#A8A8A8]">Verse</p>
        ) : (
          <p className="text-[#A8A8A8]">Verse/ 4 Tasbeeh Completed</p>
        )}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <h5 className="m-0 text-[#AA8555] text-[30px]">ٱلْرَّحْمَـانُ</h5>
        <div className=" border-l border-[#2e2822] pl-10 ">
          {props.recite ? (
            <button className="start_tasbeeh">Cancel</button>
          ) : (
            <button
              onClick={() => navigate("/recite-tasbeeh")}
              className="start_tasbeeh"
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TasbeehCard;
