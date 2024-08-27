import React from "react";
import { useNavigate } from "react-router-dom";
const HajjUmrahBtn = (props) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/detail-page/${props.id}`)}
      className="hajjUmrahBtn lg:w-[23rem] sm:w-[19rem] xss:w-full"
    >
      {props.content}
    </button>
  );
};

export default HajjUmrahBtn;
