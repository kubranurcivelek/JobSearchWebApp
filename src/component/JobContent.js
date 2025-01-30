import React, { useState } from "react";
import jobsDb from "../json/jobsDb.json";

export default function JobContent() {
  const [jobselect, setjobselect] = useState("3");
  const jobs = jobsDb.jobs;
  
  function jobaccordion(e) {
    if (jobselect === e) {
      setjobselect("");
    } else {
      setjobselect(e);
    }
  }
  return (
    <>
      <div className="container">
        <div className="job-content">
          <div className="row">
            <div className="col-xl-3" style={{ paddingRight: 0 }}>
              <div className="job-left-sidebar">
                <div className="job-left-accordion">
                  <div
                    className="job-left-accordion-header "
                    onClick={() => jobaccordion("1")}
                  >
                    <div className="job-left-title d-flex">
                      <span>Çalışma Tercihi</span>
                      <div class="material-symbols-outlined right-icon">
                        {jobselect === "1"
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      jobselect === "1"
                        ? "job-accordion-body show"
                        : "job-accordion-body"
                    }
                  >
                    <div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Hibrit
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Hibrit
                          </label>
                        </span>
                      </div>
                      <div class="mb-3 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Hibrit
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-left-accordion">
                  <div
                    className="job-left-accordion-header "
                    onClick={() => jobaccordion("2")}
                  >
                    <div className="job-left-title d-flex">
                      <span>Tarih</span>
                      <div class="material-symbols-outlined right-icon">
                      {jobselect === "2"
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      jobselect === "2"
                        ? "job-accordion-body show"
                        : "job-accordion-body"
                    }
                  >
                    <div class="">
                      <div class="form-check form-check-inline d-block">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        ></input>
                        <label class="form-check-label" for="inlineRadio1">
                          Tümü
                        </label>
                      </div>
                      <div class="form-check form-check-inline d-block">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        ></input>
                        <label class="form-check-label" for="inlineRadio2">
                          Bugünün İlanları
                        </label>
                      </div>
                      <div class="form-check form-check-inline d-block">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        ></input>
                        <label class="form-check-label" for="inlineRadio3">
                          Son 3 saat
                        </label>
                      </div>
                      <div class="form-check form-check-inline d-block">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio4"
                          value="option4"
                        ></input>
                        <label class="form-check-label" for="inlineRadio4">
                          Son 8 saat
                        </label>
                      </div>
                      <div class="form-check form-check-inline d-block">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio5"
                          value="option5"
                        ></input>
                        <label class="form-check-label" for="inlineRadio5">
                          Son 7 gün
                        </label>
                      </div>
                      <div class="form-check form-check-inline d-block mb-1">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio6"
                          value="option6"
                        ></input>
                        <label class="form-check-label" for="inlineRadio6">
                          Son 15 gün
                        </label>
                      </div>
                      <div className="left-accordion-footer mb-2">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            İlk kez yayınlananlar
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-left-accordion">
                  <div
                    className="job-left-accordion-header "
                    onClick={() => jobaccordion("3")}
                  >
                    <div className="job-left-title d-flex">
                      <span>Sektör</span>
                      <div class="material-symbols-outlined right-icon">
                      {jobselect === "3"
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      jobselect === "3"
                        ? "job-accordion-body show"
                        : "job-accordion-body"
                    }
                  >
                    <div className="accordion-input mb-3 ">
                      <input placeholder="Sektör ara"></input>
                      <span class="material-symbols-outlined">search</span>
                    </div>
                    <div class="scroll-menu">
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            checked
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Bilişim
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Üretim/Endüstriyel
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            checked
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Elektrik & Elektronik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-left-accordion">
                  <div
                    className="job-left-accordion-header "
                    onClick={() => jobaccordion("4")}
                  >
                    <div className="job-left-title d-flex">
                      <span>Pozisyon Seviyesi</span>
                      <div class="material-symbols-outlined right-icon">
                      {jobselect === "4"
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      jobselect === "4"
                        ? "job-accordion-body show"
                        : "job-accordion-body"
                    }
                  >
                    <div class="scroll-menu">
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            checked
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Üst düzey
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Orta düzey
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            checked
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Yönetici adayı
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Güvenlik
                          </label>
                        </span>
                      </div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Enerji
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job-left-accordion">
                  <div
                    className="job-left-accordion-header "
                    onClick={() => jobaccordion("5")}
                  >
                    <div className="job-left-title d-flex">
                      <span>İlan Dili</span>
                      <div class="material-symbols-outlined right-icon">
                      {jobselect === "5"
                          ? "keyboard_arrow_up"
                          : "keyboard_arrow_down"}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      jobselect === "5"
                        ? "job-accordion-body show"
                        : "job-accordion-body"
                    }
                  >
                    <div>
                      <div class="mb-1 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            Türkçe
                          </label>
                        </span>
                      </div>
                      <div class="mb-3 d-flex align-items-center justify-content-between">
                        <span class="check-left">
                          <input
                            class="form-check-input"
                            type="checkbox"
                          ></input>
                          <label
                            class="form-check-label check-label"
                            for="defaultCheck1"
                          >
                            İngilizce
                          </label>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="job-left-bottom">
                  <div className="left-bottom-body">
                    <div className="submit ">
                      <a className="login-button" href="/hesabim">
                        Uygula
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="sponsered-job">
                <div className="job-middle-title mb-3">Sponsorlu İlanlar</div>
                <a href="/is-ilanlari/ihracat-sorumlusu" style={{textDecoration :"none", color :"#333"}}>
                <JobMiddleCard
                  adress={"Hatay"}
                  corporation={"HORİZON BİYOKİMYA ÜRETİM SAN: TİC. LTD. ŞTi."}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/139/311139_258558.jpg"
                  }
                >
                  İhracat Sorumlusu
                </JobMiddleCard>
                </a>
                <a href="/is-ilanlari/oteller-sorumlusu" style={{textDecoration :"none", color :"#333"}}>
                <JobMiddleCard
                  adress={"Afyon"}
                  corporation={"Kara Mehmet Mermer San. ve Tic.Ltd.Şti."}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/810/ai_dtk_38810_6022024012041.png"
                  }
                >
                  İhracat Operasyon Uzmanı
                </JobMiddleCard>
                </a>
              </div>
              <div className="mid-card-items">
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Uyumsoft Bilgi Sistemleri ve Teknolojileri A.Ş"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/494/ai_kk_2494_6022024014947.png"
                  }
                >
                  Kıdemli İşe Alım Uzmanı
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/790/ai_kk_218790_6022024014942.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/790/ai_kk_218790_6022024014942.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/876/334876_291472.jpg"
                  }
                >
                  Oteller Sorumlusu(Turizm)
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>
                <JobMiddleCard
                  adress={"İstanbul(Avr.)"}
                  corporation={"Mena Gate"}
                  img={
                    "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/750/ai_dtk_28750_6022024012449.png"
                  }
                >
                  Palm Yağı Satış Yöneticisi
                </JobMiddleCard>

                <div className="pagination mb-3 d-flex align-itemscenter justify-content-center">
                  <div className="menu-bar d-flex">
                    <ul className="d-flex">
                      <li>
                        <button className="page-links-active">1</button>
                      </li>
                      <li>
                        <button className="page-links">2</button>
                      </li>
                      <li>
                        <button className="page-links">3</button>
                      </li>
                      <li>
                        <button className="page-links">4</button>
                      </li>
                      <li>
                        <button className="page-links">5</button>
                      </li>
                      <li>
                        <button className="page-links">6</button>
                      </li>
                      <li>
                        <button className="page-links">7</button>
                      </li>
                      <li>
                        <button className="page-links">8</button>
                      </li>
                      <li>
                        <button className="page-links">9</button>
                      </li>
                      <li>
                        <button className="page-links">10</button>
                      </li>
                      <li>
                        <button className="page-links">...</button>
                      </li>
                      <li>
                        <button className="page-links">100</button>
                      </li>
                      <li>
                        <button className="page-links">
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-xl-3" style={{ paddingLeft: 0 }}>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function JobMiddleCard({ children, adress, corporation, img }) {
  return (
    <div className="job-middle-card mb-3">
      <div className="middle-card-top d-flex">
        <img src={img} width={65} height={65} alt="" />
        <div className="mid-title-wrapper">
          <div className="mid-card-title">{children}</div>
          <div className="sub-title">{corporation}</div>
          <div className="job-detail d-flex align-items-center">
            {adress} <span className="dot">·</span> İş yerinde
          </div>
        </div>
      </div>
      <div className="middle-card-bottom ">
        <div className="bottom-left">Tam Zamanlı</div>
        <div className="bottom-right">Bugün</div>
      </div>
    </div>
  );
}
