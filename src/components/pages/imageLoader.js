import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
const ImageLoader = ({ imageUrl }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoading(false);
  }, [imageUrl]);

  return (
    <div
      className="md:h-auto h-[13rem]"
      style={{
        width: "100%",
        // height: "10rem",
        objectFit: "cover",
        // borderTopLeftRadius: "16px",
        // borderTopRightRadius: "16px",
      }}
    >
      {loading ? (
        <>
          <Skeleton className="md:h-auto h-[13rem]" variant="rectangular" />
        </>
      ) : (
        <img
          className="md:h-auto h-[13rem]"
          src={imageUrl}
          alt={""}
          loading="lazy"
          style={{
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default ImageLoader;
