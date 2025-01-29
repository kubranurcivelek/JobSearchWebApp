import React, { useState } from "react";
import userDb from "../json/userDb.json";

export default function Navbar({ user, setUser }) {
  const profile = userDb.profiles.find((profil) => profil.email === user);

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [navbarHover, setNavbarHover] = useState(false);
  const [navbarHover2, setNavbarHover2] = useState(false);
  const [buttonHover, setButoonHover] = useState(false);
  const [profileHover, setProfileHover] = useState(false);

  return (
    <div>
      <>
        <div className="sticky-top ">
          <div className="navbar">
            <div className="clean-container-padding px-0 h-100 container">
              <ul class="nav main-nav-container align-items-center h-100 d-none d-lg-flex">
                <a href="/" class="navbar-brand">
                  <img
                    src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.9108e1e.svg?v=69448"
                    alt="kariyer.net"
                    width="112"
                    height="26"
                    class="knet-navbar-img"
                  ></img>
                </a>
                <li className="nav-item d-none d-md-block h-100">
                  <a
                    href="/is-ilanlari"
                    className="nav-link-parent bottom-border"
                  >
                    İş Ara
                  </a>
                </li>

                <li
                  className="nav-item-1 d-none d-md-block h-100"
                  onMouseEnter={() => setNavbarHover(true)}
                  onMouseLeave={() => setNavbarHover(false)}
                >
                  <a href="/" className="nav-link-parent">
                    Kariyer Planlaması
                  </a>
                  {navbarHover && (
                    <div className="nav-items-menu-1">
                      <div className="d-flex">
                        <div className="nav-items-content-left">
                          <div className="nav-items-title">
                            ÜNiVERSİTEYE HAZIRLIK
                          </div>
                          <div className="nav-items-link">
                            Üniversite Rehberi
                          </div>
                          <div className="nav-items-link">Üniversiteler</div>
                          <div className="nav-items-link">
                            Üniversite Bölümleri
                          </div>
                          <div className="nav-items-link">
                            Üniversite Taban Puanları
                          </div>
                          <div className="nav-items-link">
                            Üniversite Rehberi
                          </div>
                          <div className="nav-items-link">Tercih Motoru</div>
                          <div className="nav-items-link">Meslek Rehberi</div>
                          <div className="nav-items-link">
                            İşverenlerin Tercihi
                          </div>
                        </div>
                        <div className="nav-items-content-middle">
                          <div className="nav-items-title">
                            İLK İŞİM VE PROFESYONEL HAYAT
                          </div>
                          <div className="nav-items-link">CV Örnekleri</div>
                          <div className="nav-items-link">Maaşlar</div>
                          <div className="nav-items-link">Mülakat Hazırlık</div>
                          <div className="nav-items-link">Kariyer Günleri</div>
                          <div className="nav-items-link">
                            Staj ve Bootcamp Fırsatları
                          </div>
                          <div className="nav-items-link">Staj Günleri</div>
                          <div className="nav-items-link">İş Hayatı</div>
                        </div>
                        <div className="nav-items-content-right">
                          <img
                            src="https://aday-spage.mncdn.com/Knet_img_content.91beec9.svg?v=69448"
                            width={290}
                            style={{ marginTop: "18px" }}
                            alt=""
                          />
                          <div className="nav-right-description">
                            10.000'den fazla pozisyon maaşına ait detayları{" "}
                            <span className="text-pink">hemen keşfet!</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="nav-item-2 d-none d-md-block h-100"
                  onMouseEnter={() => setNavbarHover2(true)}
                  onMouseLeave={() => setNavbarHover2(false)}
                >
                  <a href="/" className="nav-link-parent">
                    Kariyer Rehberi
                  </a>
                  {navbarHover2 && (
                    <div className="nav-items-menu-2">
                      <div className="nav-items-content-2">
                        <div className="nav-items-link">Kariyer Blog</div>
                        <div className="nav-items-link">
                          Özgeçmiş Hazırlama İpuçları
                        </div>
                        <div className="nav-items-link">İş Arama Süreci</div>
                        <div className="nav-items-link">Kişisel Gelişim</div>
                        <div className="nav-items-link">İK Blog</div>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
              <ul
                className="nav login-nav-container h-100 d-none d-lg-flex"
                onMouseEnter={() => setButoonHover(true)}
                onMouseLeave={() => setButoonHover(false)}
              >
                {user.length > 0 ? (
                  <>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDRINEMyLjkgNCAyLjAxIDQuOSAyLjAxIDZMMiAxOEMyIDE5LjEgMi45IDIwIDQgMjBIMjBDMjEuMSAyMCAyMiAxOS4xIDIyIDE4VjZDMjIgNC45IDIxLjEgNCAyMCA0Wk0xOSAxOEg1QzQuNDUgMTggNCAxNy41NSA0IDE3VjhMMTAuOTQgMTIuMzRDMTEuNTkgMTIuNzUgMTIuNDEgMTIuNzUgMTMuMDYgMTIuMzRMMjAgOFYxN0MyMCAxNy41NSAxOS41NSAxOCAxOSAxOFpNMTIgMTFMNCA2SDIwTDEyIDExWiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K"
                      width={24}
                      height={24}
                      alt=""
                      onMouseEnter={() => setProfileHover(true)}
                      onMouseLeave={() => setProfileHover(false)}
                    />
                    <img
                      src="https://docs.kariyer.net/candidate/000/033/604/avatar/3360403520240316065308023.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUsicT0T%2Bivw8tRGslHnTNI6kNQBdNmxzLrzZ4gIqPq6cplu%2Fepa236IwVEe9OuIbIYz2%2Bn9M3Vuw!e!"
                      className="auth-profile"
                      width={34}
                      height={34}
                      alt=""
                      onMouseEnter={() => setProfileHover(true)}
                      onMouseLeave={() => setProfileHover(false)}
                    />
                    <span
                      className="auth-name"
                      onMouseEnter={() => setProfileHover(true)}
                      onMouseLeave={() => setProfileHover(false)}
                    >
                      {profile.name}{" "}
                    </span>
                    <span className="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                    {profileHover && (
                      <div className="nav-profile-menu">
                        <div className="button-items-content-top">
                          <div className="d-flex">
                            <div className="mr-2">
                              <img
                                className="profile-img"
                                src="https://docs.kariyer.net/candidate/000/033/604/avatar/3360403520240316065308023.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUsicT0T%2Bivw8tRGslHnTNI6kNQBdNmxzLrzZ4gIqPq6cplu%2Fepa236IwVEe9OuIbIUXM2WyraYGP!e!"
                                alt=""
                              />
                            </div>
                            <div className="nav-profile-right">
                              <span className="profile-name">
                                KUBRANUR CIVELEK
                              </span>
                              <div className="">
                                <a
                                  href="/hesabim"
                                  style={{
                                    color: "#8316b5",
                                    marginTop: "10px",
                                    fontSize: "14px",
                                  }}
                                >
                                  Hesabıma Git
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="br-profile"></div>
                        <div className="profile-items-content-bottom">
                          <div className="profile-items-link">Ayarlar</div>
                          <div className="profile-items-link">Yardım</div>
                          <div className="profile-items-link">Çıkış Yap</div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    
                    <li className="header-nav-item ">
                      <a
                        className="nav-button d-flex align-items-center "
                        href="/giriş"
                      >
                        Giriş Yap / Üye Ol
                        <span className="material-symbols-outlined ml-2">
                          arrow_drop_down
                        </span>
                      </a>
                      {buttonHover && (
                        <div className="button-items-menu">
                          <div className="button-items-content-top">
                            <h4 className="button-items-title">
                              Aday (İş mi Arıyorsun?)
                            </h4>
                            <p class="button-items-menu-text">
                              {" "}
                              Burada seni bekleyen binlerce ilan var!{" "}
                            </p>

                            <div className=" d-flex align-items-center">
                              <div className="w-50 ">
                                <a
                                  className="submit-outline d-flex align-items-center justify-content-center"
                                  href="/giriş"
                                >
                                  Aday Girişi
                                </a>
                              </div>
                              <div
                                className="submit w-50 d-flex align-items-center justify-content-center"
                                style={{ marginLeft: "20px", height: "36px" }}
                              >
                                <a className="login-button" href="/giriş">
                                  Üye Ol
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
