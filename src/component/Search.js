import React, { useState } from "react";


export default function Search() {
  const [searchselect, setSearchselect] = useState("");

  function isSelected(e) {
    if (searchselect === e) {
      setSearchselect("");
    } else {
      setSearchselect(e);
    }
  }

  return (
    <>
      <div className="search-row">
        <div className="container">
          <div className="row d-flex">
            <div className="col-sm-9">
              <h1 className="search-title">Kariyer Fırsatlarını Keşfet</h1>
              <div className="d-flex">
                <div className="input-wrapper">
                  <div className="input " placeholder="Yazılım Uzmanı">
                    <div
                      className="input-header"
                      onClick={() => isSelected("1")}
                    >
                      <input placeholder="Finans Uzmanı"></input>
                    </div>
                    {searchselect === "1" && (
                      <div className="input-body">
                        <div className="input-body2">
                          <div className="search-buton-title">Pozisyonlarda Ara</div>
                          <div className="search-button-items">Yazılım Uzmanı</div>
                          <div className="search-button-items">Satın Alma Müdürü</div>
                          <div className="search-button-items">Muhasebe Uzmanı</div>
                          <div className="search-button-items">Makine Mühendisi</div>
                          <div className="search-button-items">Finans Uzmanı</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-wrapper">
                  <div className="input " placeholder="Yazılım Uzmanı">
                    <div
                      className="input-header"
                      onClick={() => isSelected("2")}
                    >
                      <input placeholder="Şehir veya İlçe Ara"></input>
                    </div>
                    {searchselect === "2" && (
                      <div className="input-body">
                        <div className="input-body2">
                          <div className="search-buton-title">Önerilen Konumlar</div>
                          <div className="search-button-items">İstanbul(Avr.)</div>
                          <div className="search-button-items">İstanbul(Asya)</div>
                          <div className="search-button-items">Ankara</div>
                          <div className="search-button-items">İzmir</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <button className="button d-flex align-items-center justify-content-center">
                  <span class="material-symbols-outlined">search</span>{" "}
                  <span style={{ marginLeft: "5px", fontWeight: 500 }}>
                    İŞ BUL
                  </span>
                </button>
              </div>
              <h4 className="mt-3">POPÜLER ARAMALAR</h4>
              <SearchItem>Finans Uzmanı</SearchItem>
              <SearchItem>Dijital Pazarlama Uzmanı</SearchItem>
              <SearchItem>Yazılım Geliştirme Uzmanı</SearchItem>
              <SearchItem>Proje Yöneticisi</SearchItem>
              <SearchItem>İK Uzmanı</SearchItem>
              <SearchItem>İstanbul (Avrupa)</SearchItem>
              <SearchItem>İstanbul (Asya)</SearchItem>
              <SearchItem>Ankara</SearchItem>
              <SearchItem>İzmir</SearchItem>
              <SearchItem>Bursa</SearchItem>
              <SearchItem>İstanbul</SearchItem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchItem({ children }) {
  return (
    <a href="#" className="popular-search-item">
      {children}
    </a>
  );
}
