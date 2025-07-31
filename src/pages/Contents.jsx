import { useState } from 'react';
import YouTube from 'react-youtube';
import './Contents.css'
import AnimatedNumber from '../components/AnimatedNumber';

function Contents ({ytb, insta}) {
  const [ytbCount, setYtbCount] = useState(3);
  const [instaCount, setInstaCount] = useState(3);

  const videoOptions = {
    width: '600px',
    height: '400px',
    playerVars: {
      autoplay: 1,
      mute: 1
    },
  };

  return (
    <div className='ctn'>
      <div className='ctn-header'>
        <h1>전 세계적으로 퍼져있는 컨텐츠를 활용한 <br />
          여행합니다 만의 최적의 마케터 전략</h1>
      </div>
      <div className='ctn-main'>
        <div className='stat'>
         <h4>유튜브 구독</h4>
         <AnimatedNumber target={382000}/>
        </div>
        <div className="stat">
         <h4>유튜브 조회</h4>
         <AnimatedNumber target={1500000}/>
        </div>
        <div className="stat">
         <h4>인스타그램 팔로워</h4>
         <AnimatedNumber target={1480000}/>
        </div>
        <div className="stat">
         <h4>인스타그램 릴스</h4>
         <AnimatedNumber target={1532000}/>
        </div>
      </div>

      <div className='ytb-header'>
      <i class="fa-brands fa-youtube fa-3x" style={{color: 'red'}}></i>
      <h2>Youtube</h2>
      </div>
      <div className='ytb-video'>
        <YouTube videoId="CVNB5y54j9A" opts={videoOptions} />
        <div className="ytb-video-text">
          <h3>여행에미쳤다 만의 컨텐츠 성공 노하우</h3> <br/>
          <p>#1. 매력적인 여행 관련 콘텐츠로 여행에미쳤다 채널의 400만 여행자에게 지역과 브랜드를 알립니다.<br/><br/>
             #2. 커뮤니티를 기반으로 젊은 여행자들이 함께 하는 여행 프로그램을 기획하고 운영합니다.<br/><br/>
             #3. 다양한 여행 크리에이터들이 고유한 목소리로 여러분의 브랜드를 알릴 수 있도록 크리에이터들과 브랜드를 연결하고 이끕니다.
          </p>
        </div>
      </div>

      <div className='insta'>
        <div className="insta-header">
          <i class="fa-brands fa-instagram fa-3x" style={{color: 'pink'}}></i>
          <h2>Instagram</h2>
        </div>
        <div className='insta-img'>
        <div className='image-box'>
          <img src="../public/yeomi.PNG" alt="" style={{width: '400px', height: '400px'}} />
          <div className="text">
            <h3>여기어때 <br/> 옥외광고 홍보</h3>
          <p>
            공항에서 송출되고 있는 옥외광고를 유저들에게 <br/>
            자연스럽게 노출하여 여기어때 옥외 광고에 <br/>
            대한 유저들의 인지도를 제고했습니다
          </p>
          </div>
        </div>
        <div className='image-box'>
          <img src="../public/lils3.PNG" alt="" style={{width: '400px', height: '400px'}} />
          <div className="text">
            <h3>아시아나 <br/> 항공노선 홍보</h3>
            <p>
              7-8월 휴가 기간 성수기를 대비해 낯선 일본의 <br/>
              소도시인 미야자키로 갈 수 있는 아시아나 직항 <br/>
              노선을 홍보하기 위한 콘텐츠를 기획하였습니다
            </p>
          </div>
        </div>
        <div className='image-box'>
          <img src="../public/camping.PNG" alt="" style={{width: '400px', height: '400px'}} />
          <div className="text">
            <h3>캠핑의여정 프로젝트</h3>
            <p>
              지속 가능한 캠핑의 흥미로움과 지역 상생을 <br/>
              위하여 캠핑여행 프로그램을 기획하고 운영합니다
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Contents;