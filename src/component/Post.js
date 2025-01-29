import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <>
        <div className="post-row">
          <div className="container">
            <div className="d-flex">
              <div className="post-card">
                <div className="toc-menus">
                  <div className="pt-3">
                    <div className="toc-menus-button-active">
                      Bugün Yayınlananlar
                    </div>
                    <div class="line mt-3"></div>
                  </div>
                  <div className="pt-3">
                    <div className="toc-menus-button">
                      Uzaktan Çalışma İlanları
                    </div>
                    <div class="line mt-3"></div>
                  </div>
                  <div className="pt-3">
                    <div className="toc-menus-button">Part-time İlanlar</div>
                    <div class="line mt-3"></div>
                  </div>
                  <div className="pt-3">
                    <div className="toc-menus-button">Yeni Mezun İlanlar</div>
                    <div class="line mt-3"></div>
                  </div>
                  <div className="pt-3">
                    <div className="toc-menus-button">Yönetici İlanları</div>
                    <div class="line mt-3"></div>
                  </div>
                </div>
              </div>
              <div className="card">
              <div class="d-flex justify-content-between align-items-center ">
                <div class="row-title">BUGÜN YAYINLANANLAR</div>
                <button class="task-button">Tüm İlanlar</button>
              </div>

                <div className="job-items">
                  <div className="job-cards">
                    <JobCard
                      adress={"İstanbul(Avr.) - Hibrit"}
                      description={"EDS Elektronik Destek San. Ve Tic."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/572/ai_dtk_14572_6022024011515.png"
                      }
                    >
                      Kurumsal Satış Uzmanı
                    </JobCard>
                    <JobCard
                      adress={"İstanbul(Asya) - İş Yerinde"}
                      description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/775/90775_249606.jpg"
                      }
                    >
                      ERP Mühendisi (ıfs)
                    </JobCard>
                    <JobCard
                      adress={"İstanbul(Asya) - İş Yerinde"}
                      description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/350/ai_dtk_206350_6022024005849.png"
                      }
                    >
                      ERP Mühendisi (ıfs)
                    </JobCard>
                    <JobCard
                      adress={"İstanbul(Asya) - İş Yerinde"}
                      description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/172/ai_dtk_168172_6022024011354.png"
                      }
                    >
                      ERP Mühendisi (ıfs)
                    </JobCard>
                    <JobCard
                      adress={"İstanbul(Asya) - İş Yerinde"}
                      description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/350/ai_dtk_206350_6022024005849.png"
                      }
                    >
                      ERP Mühendisi (ıfs)
                    </JobCard>
                    <JobCard
                      adress={"İstanbul(Asya) - İş Yerinde"}
                      description={"Kuzey Star Shipyard Denizcilik Tic. A.Ş."}
                      img={
                        "https://img-kariyer.mncdn.com/mnresize/150/150/UploadFiles/Clients/SquareLogo/472/ai_dtk_1472_6022024004228.png"
                      }
                    >
                      ERP Mühendisi (ıfs)
                    </JobCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function JobCard({ children, adress, description, img }) {
  return (
    <div className="job-card">
      <div className="row mb-2">
        <div className="col-sm-2">
          <img src={img} width={65} height={65} alt="" />
        </div>
        <div className="col-sm-10">
          <div className="card-title">{children}</div>
          <div className="card-text">{description}</div>
          <div className="card-adress">{adress}</div>
        </div>
      </div>
      <div className="c-footer d-flex justify-content-between">
        <div className="d-flex flex-row">
          <span>Tam Zamanlı</span>
        </div>
        <div className="d-flex flex-row-reverse">
          <span>Bugün</span>
        </div>
      </div>
    </div>
  );
}
