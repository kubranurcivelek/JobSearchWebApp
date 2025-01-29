import React from "react";
import JobHeader from "../component/JobHeader";
import "../JobPosts.css";
import JobContent from "../component/JobContent";
import Footer from "../component/Footer";

export default function JobPosts() {
  return (
    <>
      <JobHeader />
      <div className="job-bg">
        <div className="container  mb-4">
          <div class="breadcrumb  d-flex align-items-center pt-0">
            <a href="/">Ana Sayfa</a>
            <span>&rsaquo;</span>
            <b>İş İlanları</b>
          </div>
          <div className="">
            <h3 className="counter">49623 İş İlanları</h3>
          </div>
        </div>
        <JobContent />
      </div>
      <Footer />
    </>
  );
}
