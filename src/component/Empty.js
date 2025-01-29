import React, { useState } from "react";

export default function Empty() {
    const [isLoggedIn, setIsLoggedIn] = useState("MUHAMMED IKBAL");
  return (
    <>
      <div className="sticky-top ">
        <div className="navbar">
            <div className="clean-container-padding px-0 h-100 container">
                <ul class="nav main-nav-container align-items-center h-100 d-none d-lg-flex">
                    <a href="/"  class="navbar-brand" >
                        <img src="https://aday-spage.mncdn.com/Knet_img_KnetLogo.9108e1e.svg?v=69448" alt="kariyer.net" width="112" height="26" class="knet-navbar-img"></img>
                    </a>
                    <li className="nav-item d-none d-md-block h-100">
                        <a href="/is-ilanlari" className="nav-link-parent bottom-border" >İş Ara</a>
                    </li>
                    <li className="nav-item-1 d-none d-md-block h-100">
                        <a href="/" className="nav-link-parent" >Kariyer Planlaması</a>
                    </li>
                    <li className="nav-item-2 d-none d-md-block h-100">
                        <a href="/" className="nav-link-parent" >Kariyer Rehberi</a>
                    </li>
                </ul>
                <ul className="nav login-nav-container h-100 d-none d-lg-flex">
                {isLoggedIn ? (
                  <>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDRINEMyLjkgNCAyLjAxIDQuOSAyLjAxIDZMMiAxOEMyIDE5LjEgMi45IDIwIDQgMjBIMjBDMjEuMSAyMCAyMiAxOS4xIDIyIDE4VjZDMjIgNC45IDIxLjEgNCAyMCA0Wk0xOSAxOEg1QzQuNDUgMTggNCAxNy41NSA0IDE3VjhMMTAuOTQgMTIuMzRDMTEuNTkgMTIuNzUgMTIuNDEgMTIuNzUgMTMuMDYgMTIuMzRMMjAgOFYxN0MyMCAxNy41NSAxOS41NSAxOCAxOSAxOFpNMTIgMTFMNCA2SDIwTDEyIDExWiIgZmlsbD0iIzMzMzMzMyIvPgo8L3N2Zz4K"
                      width={24}
                      height={24}
                      alt=""
                    />
                    <img
                      src="https://docs.kariyer.net/candidate/000/033/604/avatar/3360403520240316065308023.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUsicT0T%2Bivw8tRGslHnTNI6kNQBdNmxzLrzZ4gIqPq6cplu%2Fepa236IwVEe9OuIbIYz2%2Bn9M3Vuw!e!"
                      className="auth-profile"
                      width={34}
                      height={34}
                      alt=""
                    />
                    <span className="auth-name">{isLoggedIn} </span>
                    <span className="material-symbols-outlined">
                      arrow_drop_down
                    </span>
                  </>
                ) :(
                    <>
                    <li className="header-nav-item">
                        <button className="nav-button-outline ">
                        İlan Paketi Al
                        </button>
                    </li>
                    <li className="header-nav-item">
                        <a className="nav-button d-flex align-items-center " href="/giriş">
                        Giriş Yap / Üye Ol
                        <span className="material-symbols-outlined ml-2">
                      arrow_drop_down
                    </span>
                        </a>
                    </li>
                    </>

                )}
                    

                </ul>
            </div>
        </div>
      </div>
    </>
  );
}
