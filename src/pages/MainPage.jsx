import { useState } from 'react'
import './MainPage.css'
import AnimatedNumber from '../components/AnimatedNumber';

function MainPage({story}) {
  const [storyCount, setStoryCount] = useState(3);

  return (
    <div className='main'>
        {/* <img src="../public/main.jpg" alt="" style={{width: '300px', height: 'auto'}} /> */}
        <div className='header'>
          <h1>안녕하세요?<br />
          <br />
          세상에서 가장 홀가분한 여행합니다.</h1>
          <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160715_203%2Fwlstnrhks00_1468569643002cEQJo_JPEG%2F%25BF%25A9%25C7%25E0%25BF%25A1%25B9%25CC%25C4%25A1%25B4%25D9.jpg&type=sc960_832"
           style={{width: '600px', height: '400px'}} alt="" />
        </div>

        <div className='section'>
          <div className='left-box'>
            <h2 className='title'>About</h2>
          </div>

          <div className='right-box'>
            <h3 className='middle'>여행합니다는 국내 최대 여행 커뮤니티입니다.</h3>
            <p className='write'>그리고 여행을 소재로 다양한 뉴미디어 디지털 콘텐츠를 만드는 콘텐츠 스타트업입니다<br />
              <br />
              저희는 더 많은 여행이 인생을 풍요롭게 만든다고 믿습니다.
              그래서 인스타그램, 틱톡, 유튜브에 걸쳐 <br/>
              400만 오디언스를 보유한 채널을 바탕으로,
              디지털 여행 크리에이터와 함께 양질의 여행 콘텐츠를 선보입니다.<br />
              <br />
              좋은 지역과 브랜드들이 더 잘 알려질 수 있도록 브랜디드 여행 콘텐츠와 캠페인을 만듭니다.
            </p>
          </div>
        </div>
        
        <div className='image-title'>
          <h2>Our Story</h2>
          <div className="images1">
            {
              story.slice(0, storyCount).map((data, index) => (
              <img
                key={index}
                src={`https://raw.githubusercontent.com/choiseungryul/picture/refs/heads/main/story/${data}.JPG`}
                alt=""
                style={{ width: '300px', height: '500px' }}
              />
              ))
            }
          </div>
          <div>
            {storyCount > story.length ? (
              alert("더 이상 없습니다")
            ) : (
            <button onClick={() => {
              setStoryCount(storyCount +3);
            }}>Read More <i class="fa-solid fa-angle-down"></i></button>
            )}
          </div>
        </div>

        <div className='image-title2'>
          <h2>Our contents</h2>
          <div className="images2">
            <div className='card'>
             <a href="https://www.youtube.com/@YEOMI" target='_blank' rel="noopener noreferrer" className='image-link'>
                <img src="/insta.PNG" alt=""/>
                <div className="overlay">유튜브 바로가기</div>
             </a>
              <i class="fa-brands fa-youtube fa-3x" style={{color: 'red'}}></i>
              <h2>Youtube <br/></h2>
              <AnimatedNumber target={382000}/>
            </div>
            <div className='card'>
            <a href="https://www.instagram.com/yeomi.travel/" target='_blank' rel="noopener noreferrer" className='image-link'>
              <img src="/ytb.PNG" alt=""/>
              <div className="overlay">인스타 바로가기</div>
            </a>
              <i class="fa-brands fa-instagram fa-3x" style={{color: 'pink'}}></i>
              <h2>Instagram</h2>
              <AnimatedNumber target={1480000}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainPage;