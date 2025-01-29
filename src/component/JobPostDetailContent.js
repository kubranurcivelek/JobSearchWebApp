import React from "react";
import jobsDb from "../json/jobsDb.json";

export default function JobPostDetailContent({ ilanadi }) {
  const job = jobsDb.jobs.find((ilan) => ilan.link === ilanadi);

  return (
    <>
      <div className="job-detail-content">
        <div className="row">
          <div className="col-sm-8">
            <div className="card mb-3">
              <div className="font-styles">
                <div className="headline-top d-flex ">
                  <h6 className="headline-title">
                    <p className="mb-1">{job.title}</p>
                    <span>{job.description}</span>
                  </h6>
                  <div className="buttons d-flex">
                    <button className="button">Başvur</button>
                    <button className="button-outline">Kaydet</button>

                    <svg
                      data-v-3b491596
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                      class="share-icon"
                    >
                      <g data-v-3b491596 fill="none" fill-rule="evenodd">
                        <path
                          data-v-3b491596
                          d="M4 36h28a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4z"
                        ></path>
                        <path
                          data-v-3b491596
                          d="M21 14v-1.59c0-.89 1.08-1.34 1.71-.71l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59c-.63.63-1.71.19-1.71-.7V19.9c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z"
                          fill-rule="nonzero"
                          stroke="#8316B5"
                          class="fill"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="headline-bottom d-flex mt-2">
                  <div className="headline-bottom-left d-flex">
                    {job.adress} İş Yerinde
                  </div>
                  <div className="headline-bottom-right">
                    30 gün önce güncellendi
                  </div>
                </div>
                <div className="details-container">
                  <div className="details">
                    <h3>Çalışma Şekli</h3>
                    <p>Serbest</p>
                  </div>
                  <div className="details">
                    <h3>Tecrübe</h3>
                    <p>Tecrübeli / Tecrübesiz</p>
                  </div>
                  <div className="details">
                    <h3>Departman</h3>
                    <p>Eğitim</p>
                  </div>
                  <div className="details">
                    <h3>Başvuru Sayısı</h3>
                    <p>159 başvuru</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3">
              <div className="job-detail-contents">
                <div className="job-detail-title">
                  GENEL NİTELİKLER VE İŞ TANIMI
                </div>
                <p>
                  Piyano öğretmeni, öğrencilere piyano çalmayı öğretmekle
                  sorumlu olan profesyonel bir müzik öğretmenidir. Piyano
                  öğretmeni, öğrencilere müzik teorisi, nota okuma, piyano
                  teknikleri ve performans becerileri konularında rehberlik
                  eder.
                </p>
                <br />
                <div className="job-detail-title">Genel Nitelikler</div>
                <ul>
                  <li>Müzik eğitimi veya ilgili alanda lisans derecesi</li>
                  <li>Piyano çalma konusunda uzmanlık</li>
                  <li>İletişim becerileri ve öğretme yeteneği</li>
                  <li>Öğrencilere ilham verme ve motive etme becerisi</li>
                  <li>Esnek çalışma saatlerine uyum sağlayabilme</li>
                </ul>
                <br />
                <div className="job-detail-title">İş Tanımı</div>
                <ul>
                  <li>Öğrencilere piyano çalmayı öğretmek</li>
                  <li>
                    Müzik teorisi, nota okuma ve piyano teknikleri konularında
                    dersler vermek
                  </li>
                  <li>Öğrencilerin performans becerilerini geliştirmek</li>
                  <li>Bireysel veya grup dersleri planlamak ve uygulamak</li>
                  <li>
                    Öğrencilerin ilerlemesini takip etmek ve değerlendirmek
                  </li>
                </ul>

                <div
                  className="text-pink"
                  style={{ fontWeight: 500, marginBottom: "40px" }}
                >
                  İlanı Şikayet Et
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
