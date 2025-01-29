import React, { useState } from "react";

export default function Info() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState("1");

  function isSelected(e) {
    if (selected === e) {
      setSelected("");
    } else {
      setSelected(e);
    }
  }

  return (
    <>
      <div className="info">
        <div className="container">
          <div className="wrapper-info" id="1">
            <div
              className="wrapper-info-header"
              onClick={() => isSelected("1")}
            >
              <h2>
                Sektöre Göre İş İlanları
                <span class="material-symbols-outlined">
                  {selected === "1"
                    ? "keyboard_arrow_up"
                    : "keyboard_arrow_down"}
                </span>
              </h2>
            </div>

            <div
              className={
                selected === "1"
                  ? "wrapper-info-body show"
                  : "wrapper-info-body"
              }
            >
              
              <div className="wrapper-col">
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
              </div>
            </div>
          </div>
          <div className="wrapper-info" id="2">
            <div
              className="wrapper-info-header"
              onClick={() => isSelected("2")}
            >
              <h2>
                İllere Göre İş İlanları
                <span class="material-symbols-outlined">
                  {selected === "2"
                    ? "keyboard_arrow_up"
                    : "keyboard_arrow_down"}
                </span>
              </h2>
            </div>

            <div
              className={
                selected === "2"
                  ? "wrapper-info-body show"
                  : "wrapper-info-body"
              }
            >
              <div className="wrapper-col">
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
              </div>
            </div>
          </div>
          <div className="wrapper-info" id="3">
            <div
              className="wrapper-info-header"
              onClick={() => isSelected("3")}
            >
              <h2>
                İllere Göre İş İlanları
                <span class="material-symbols-outlined">
                  {selected === "2"
                    ? "keyboard_arrow_up"
                    : "keyboard_arrow_down"}
                </span>
              </h2>
            </div>

            <div
              className={
                selected === "3"
                  ? "wrapper-info-body show"
                  : "wrapper-info-body"
              }
            >
              <div className="wrapper-col">
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
                <div className="col-title">Bilişim (1267)</div>
              </div>
            </div>
          </div>

          <div className="info-title">Kariyer.net İş ilanları</div>
          <div className="info-p">
            Dijital İK'nın öncüsü Kariyer.net, 1999 yılından bugüne Türkiye’nin
            en büyük istihdam platformu. Açık iş pozisyonlarından iş piyasasına
            dair iç görülere, kişisel gelişim odaklı çalışmalardan pozisyon -
            yetenek uyumuna kadar tüm deneyimini; mavi yakalıdan yönetici
            adaylarına, işverenden stajyer öğrenciye kadar herkese ulaştırma
            görevini üstleniyor. Öğrenim göreceğin üniversite, seçeceğin bölüm
            hakkındaki tüm bilgiye ve mezun olduktan sonra hayalindeki iş
            fırsatlarına da yine Kariyer.net ile ulaşmak çok kolay!
          </div>
          <div className="info-title">Kariyer.net İş Bulma</div>
          <div className="info-p">
            {" "}
            <p>
              Kariyer.net; iş arama, iş bulma, doğru yeteneğe ulaşma sürecinde
              1999 yılından bugüne hem adayların hem de işverenlerin yanında
              olan Türkiye’nin en büyük istihdam platformu. Kariyer.net, farklı
              filtreleme özellikleriyle doğrudan aradığın özelliklerdeki iş
              ilanlarını sana sunuyor. Benzer şekilde kurumlar için en doğru
              niteliklere sahip adaylara da Kariyer.net‘ten ulaşılabiliyor. İş
              arama sürecinin zorluklarını doğru analiz eden ve bu amaçla
              dijital çözümlerini yenileyen Kariyer.net, kullanıcılarına fayda
              odaklı bir deneyim sunuyor.
            </p>
            <p>
              Kariyer.net ana sayfasını ziyaret ettiğin andan itibaren, geleceğe
              yönelik önemli planları yapmak için konunun uzmanları tarafından
              doğru adreslere yönlendiriliyorsun. Çalışmak istediğin pozisyon
              için ana sayfadaki “iş ara” sekmesine tıkladığında karşına o an
              için açık olan, on binlerce pozisyonun bilgisi çıkıyor. Bu
              bilgiler içinden çalışmak istediğin şehir, sektör, pozisyon
              seviyesi, departman, çalışma şekli, eğitim seviyesi gibi
              özellikleri filtreleyebiliyorsun. Ayrıca çalışmak istediğin
              şirketin özellikleri, ilan dili, deneyim süresi gibi özel
              ayrıntılar için de filtre uygulayabiliyorsun.{" "}
            </p>
            <p>
              Kariyer.net, iş arayanların doğru tercihler yapmasını ve alanında
              yetkin olan çalışan arayışındaki firmaların da başarı grafiklerini
              yükseltecek yeteneklere ulaşmasını amaçlıyor. Kariyer.net ilan
              sayfaları dışında çok farklı başlıklarda da kullanıcılarının
              yanında oluyor. İş arama platformları arasında uzun yıllara
              dayanan tecrübesiyle özel bir konuma sahip olan Kariyer.net, çok
              kapsamlı bir rehberlik hizmeti gerçekleştiriyor. Kariyer hayatının
              başlangıcından itibaren bilgi, tecrübe ve uzmanlığından
              yararlanacağın Kariyer.net ile iş arama sürecini daha kolay hale
              getirebilirsin.{" "}
            </p>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            {!isVisible && (
              <button
                className="info-button d-flex justify-content-center"
                onClick={() => setIsVisible(!isVisible)}
              >
                Devamını Gör{" "}
                <span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </button>
            )}
          </div>

          {isVisible ? (
            <div className="info-title">
              Kariyer.net ile Sana Uygun İş Fırsatlarını Değerlendir
              <div className="info-p">
                Kariyer fırsatları konusunda sana önemli kapıları açan
                Kariyer.net’te; uzman, yönetici, yeni mezun ve mavi yakalı
                başlıkları altında binlerce iş ilanına ulaşabilirsin. Bu iş
                ilanları dışında ayrıca part-time iş ilanlarına ve stajyer iş
                ilanlarına da erişebilirsin. Ayrıca kariyerin adına alacağın tüm
                kararlarda sana yardımcı olacak bilgilere, Pozisyon Rehberi,
                Üniversite Rehberi ve Kariyer Rehberi vb. sayfalardan
                ulaşabilirsin. Kariyer Rehberi sayfasında; özgeçmiş hazırlama,
                iş arama, mülakat, iş hayatı gibi konularda önemli kariyer
                tavsiyeleri bulabilirsin. Pozisyon Rehberi’nde pozisyonlarla,
                Üniversite Rehberi’nde ise üniversite ve bölümlerle ilgili en
                çok merak edilen konularda önemli bilgilere hızla ulaşabilirsin.
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
