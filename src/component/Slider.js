import React, { useEffect } from "react";
import { useState } from "react";

export default function Slider() {
  const imgs = [
    "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/3/halfgravity_20240308-110754.png",
    "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/2/halfgravity_20240215-042608.png",
    "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/3/halfgravity_20240308-115711.jpg",
    "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2023/4/halfgravity_20230414-122348.jpg",
    "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/3/halfgravity_20240308-115447.png",
  ];

  const [indexImg, setIndexImg] = useState(0);
  const [btnVisible, setBtnVisible] = useState(false);

  function nextImg() {
    setIndexImg((index) => {
      if (index === imgs.length - 1) return 0;
      return index + 1;
    });
  }

  function previousImg() {
    setIndexImg((index) => {
      if (index === 0) return imgs.length - 1;
      return index - 1;
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!btnVisible) {
        nextImg();
      }
    }, 3000); // 3 saniyede bir geçiş yapacak

    return () => clearInterval(intervalId);
  }, [btnVisible]);

  return (
    <>
      <div className="slider-row">
        <div
          className="container"
          style={{ position: "relative" }}
          onMouseEnter={() => setBtnVisible(true)}
          onMouseLeave={() => setBtnVisible(false)}
        >
          <div className="slider"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              overflow: "hidden",
            }}
          >
            {imgs.map((url) => (
              <img
                key={url}
                src={url}
                alt=""
                style={{ translate: `${-100 * indexImg}%` }}
              />
            ))}
          </div>
          {btnVisible && (
            <>
              <button
                className="slider-btn"
                onClick={previousImg}
                style={{ left: -3 }}
              >
                <span class="material-symbols-outlined">navigate_before</span>
              </button>
              <button
                className="slider-btn"
                onClick={nextImg}
                style={{ right: -3 }}
              >
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
