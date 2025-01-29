import React, { useState } from "react";

export default function Featured() {
  const [btnVisible, setBtnVisible] = useState(false);
  return (
    <>
      <div className="featured-row">
        <div className="container">
          <h2 className="row-title">ÖNE ÇIKAN İLANLAR</h2>
          <div
            className="featured "
            style={{ position: "relative" }}
            onMouseEnter={() => setBtnVisible(true)}
            onMouseLeave={() => setBtnVisible(false)}
          >
            <Card
              image={
                "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/035/368035_264075.jpg"
              }
              p={"Hayat Sigortası Satış Danışmanı"}
              company={"Viennalife"}
              city={"İstanbul (Tümü)"}
            />
            <Card
              image={
                "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/035/368035_264075.jpg"
              }
              p={"Hayat Sigortası Satış Danışmanı"}
              company={"Viennalife"}
              city={"İstanbul (Tümü)"}
            />
            <Card
              image={
                "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/849/377849_291739.jpg"
              }
              p={"Hayat Sigortası Satış Danışmanı"}
              company={"Viennalife"}
              city={"İstanbul (Tümü)"}
            />
            <Card
              image={
                "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/542/ai_dtk_280542_6022024013459.png"
              }
              p={"Hayat Sigortası Satış Danışmanı"}
              company={"Viennalife"}
              city={"İstanbul (Tümü)"}
            />
            <Card
              image={
                "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/035/14035_3702.jpg"
              }
              p={"Hayat Sigortası Satış Danışmanı"}
              company={"Viennalife"}
              city={"İstanbul (Tümü)"}
            />
            {btnVisible && (
              <>
                <button className="slider-btn" style={{ left: -20 }}>
                  <span class="material-symbols-outlined">navigate_before</span>
                </button>
                <button className="slider-btn" style={{ right: -20 }}>
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ image = "", alt = "", p = "", company, city }) {
  return (
    <div className="featured-card mb-4">
      <img src={image} alt={alt} className="mb-3" width={60} height={60} />
      <p>{p}</p>
      <div className="company-line">{company}</div>
      <div className="company-line">{city}</div>
    </div>
  );
}
