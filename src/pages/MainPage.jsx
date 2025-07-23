import './MainPage.css'

function MainPage() {
  return (
    <div className='main'>
        {/* <img src="../public/main.jpg" alt="" style={{width: '300px', height: 'auto'}} /> */}
        <div className='header'>
          <h1>안녕하세요?<br />
          <br />
          여행에 미쳤다 입니다</h1>
          <img src="https://placehold.co/300x400" alt="" />
        </div>

        <div className='section'>
          <div className='left-box'>
            <h2 className='title'>About</h2>
          </div>

          <div className='right-box'>
            <h3 className='middle'>여행에 미쳤다는 국내 최대 여행 커뮤니티입니다.</h3>
            <p className='write'>그리고 여행을 소재로 다양한 뉴미디어 디지털 콘텐츠를 만드는 콘텐츠 스타트업입니다<br />
              <br />
              저희는 더 많은 여행이 인생을 풍요롭게 만든다고 믿습니다.
              그래서 인스타그램, 틱톡, 유튜브에 걸쳐 400만 오디언스를 보유한 자체 채널을 바탕으로,
              디지털 여행 크리에이터와 함께 양질의 여행 콘텐츠를 선보입니다.<br />
              <br />
              좋은 지역과 브랜드들이 더 잘 알려질 수 있도록 브랜디드 여행 콘텐츠와 캠페인을 만듭니다.
            </p>
          </div>
        </div>
        
        <div className='image-title'>
          <h2>Our Story</h2>
          <div className="images1">
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
          </div>
        </div>

        <div className='image-title2'>
          <h2>Our contents</h2>
          <div className="images2">
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
          </div>
        </div>

        <div className='image-title3'>
          <h2>Our Business</h2>
          <div className="images3">
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
            <img src="https://placehold.co/300x400" alt=""/>
          </div>
        </div>

        <div className='bottom'>
          <h3>여행에 미쳤다</h3>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">contents</a>
            </li>
            <li>
              <a href="">business</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default MainPage;