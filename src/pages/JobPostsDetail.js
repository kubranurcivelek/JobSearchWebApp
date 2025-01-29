import React from "react";
import JobPostDetailContent from "../component/JobPostDetailContent";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";

export default function JobPostsDetail() {
  const params = useParams();
  const ilanadi = params.ilanadi;
  return (
    <>
      <div className="job-detail">
        <div className="container">
          <div class="breadcrumb d-flex align-items-center pt-3 mb-4">
            <a href="/">Ana Sayfa</a>
            <span>&rsaquo;</span>
            <a href="/">İş İlanları</a>
            <span>&rsaquo;</span>
            <a href="/">İstanbul(Asya) İş İlanları</a>
            <span>&rsaquo;</span>
            <b>İstanbul(Asya) Servis Teknikeri İş İlanları</b>
          </div>

          <JobPostDetailContent ilanadi={ilanadi} />
        </div>
      </div>
      <Footer />
    </>
  );
}
