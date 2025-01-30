import React from "react";
import { useLocation } from "react-router-dom";
import JobHeader from "../component/JobHeader";
import "../JobPosts.css";
import JobContent from "../component/JobContent";
import Footer from "../component/Footer";
import jobsDb from "../json/jobsDb.json";

export default function JobPosts() {
  const location = useLocation();
  const { position, city } = location.state || {}; // Gelen pozisyon ve şehir bilgisi

  // İş ilanlarını filtreleme
  const filteredJobs = jobsDb.jobs.filter((job) => {
    const matchesPosition = position
      ? job.title.toLowerCase().includes(position)
      : true;
    const matchesCity = city
      ? job.adress.toLowerCase().includes(city)
      : true;
    return matchesPosition && matchesCity;
  });

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
            <h3 className="counter">{filteredJobs.length} İş İlanları</h3>
          </div>
        </div>
        <JobContent jobs={filteredJobs} /> {/* Filtrelenmiş iş ilanlarını gönderiyoruz */}
      </div>
      <Footer />
    </>
  );
}
