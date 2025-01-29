import React from "react";

export default function JobHeader() {
  return (
    <>
    
      <div className="job-search-bar ">
        <div className="container">
          <div className="job-search-box d-flex">
            <div className="job-input-search d-flex align-items-center">
              <input placeholder="Pozisyon veya şirket ara"></input>
              <span class="material-symbols-outlined">search</span>
            </div>
            <div className="job-input-search-right d-flex align-items-center">
              <input placeholder="Şehir veya ilçe ara"></input>
              <span class="material-symbols-outlined">search</span>
            </div>
            <button className="job-header-button">İş Ara</button>
          </div>
        </div>
      </div>
 
    </>
  );
}
