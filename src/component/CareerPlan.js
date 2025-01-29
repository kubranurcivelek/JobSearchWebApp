import React, { Component } from "react";

export default class CareerPlan extends Component {
  render() {
    return (
      <>
        <div className="career-row">
          <div className="container">
            <div className="row-title">KARİYERİNİ PLANLA</div>
            <div className="row">
              <div className="col-sm-8">
                <div className="row-p">
                  Kariyerini planlamaya hazır mısın? Üniversite tercihinden
                  itibaren kariyer yolculuğunun her adımını titizlikle
                  planlayabileceğin içerikleri senin için bir araya getirdik.
                  Merak ettiğin tüm sorulara yanıt bulacak, iş fırsatlarını
                  keşfedeceksin!
                </div>
                <div className="career-card">
                  <div className="row">
                    <div className="col-sm-1">
                      <span class="material-symbols-outlined ">
                        history_edu
                      </span>
                    </div>
                    <div className="col-sm-11 p-0">
                      <div className="title">
                        Hangi Bölümde seni ne bekliyor?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="career-card">
                  <div className="row">
                    <div className="col-sm-1">
                      <span class="material-symbols-outlined ">
                      moving
                      </span>
                    </div>
                    <div className="col-sm-11 p-0">
                      <div className="title">
                        Pozisyonun iş tanımları neler?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="career-card">
                  <div className="row">
                    <div className="col-sm-1">
                      <span class="material-symbols-outlined ">
                      school
                      </span>
                    </div>
                    <div className="col-sm-11 p-0">
                      <div className="title">
                        Meslek grupları ne kadar maaş alıyor?
                      </div>
                    </div>
                  </div>
                </div>
                <div className="career-card">
                  <div className="row">
                    <div className="col-sm-1">
                      <span class="material-symbols-outlined ">
                      search
                      </span>
                    </div>
                    <div className="col-sm-11 p-0">
                      <div className="title">
                        Sana özel CV şablonları burada!
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-sm-4">
                <img src="CareerImage.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
