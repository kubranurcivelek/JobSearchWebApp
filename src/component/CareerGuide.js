import React, { Component } from 'react'

export default class CareerGuide extends Component {
  render() {
    return (
      <>
        <div className="guide-row">
            <div className="container">
                <div className="row-title">KARİYER REHBERİ</div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="guide-card">
                            <img src='https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2024/03/Kariyer.net-Whatsapp-kanalini-300x200.png' alt=''/>
                             <div className='guide-text'>Kariyer.Net Whatsapp Kanalı açıldı!</div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="guide-card">
                            <img src='https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2023/04/is_aramak-300x180.jpg' alt=''/>
                             <div className='guide-text'>Çalışırken iş aramanın 4 püf noktası</div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="guide-card">
                            <img src='https://www.kariyer.net/kariyer-rehberi/wp-content/uploads/2024/02/konfor_alani-300x199.jpg' alt=''/>
                             <div className='guide-text'>Konfor alanın dışına çıkmak, ama nasıl?</div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="guide-card">
                            <img src='https://www.kariyer.net/ik-blog/wp-content/uploads/2024/03/liderlik-300x200.jpg' alt=''/>
                             <div className='guide-text'>Yaptığınız hatadan sonra yeniden güven kazanmanın 5 yolu</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
      </>
    )
  }
}
