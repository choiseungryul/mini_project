import './Introduce.css'

function Introduce () {

  return (
    <div className='intro'>
        <div className='intro-header'>
        <h2 className='intro-title'>Intro Site</h2>
      <div className='intro-site'>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150601_141%2Fjeep_camping_14331259743536Jui6_JPEG%2F2-2.jpg&type=sc960_832"
        style={{width: '600px', height: '400px'}} alt=""/>

        <div className='intro-subtitle'>
          <h2>여행합니다 회사는</h2>
          <p>2026년도에 설립되어 유튜브, 인스타그램 컨텐츠를 기반으로<br />
            크리에이터의 삶을 꿈꾸고 있는 사람들의 둥지가 되어주는 스타트업 회사입니다.
          </p>
        </div>
      </div>
      </div>
      
      <h2 className='intro-thirdtitle'>Our Members</h2>
      <div className='intro-members'>
        <img src="../public/곽튜브.PNG" style={{width: '400px', height: 'auto'}} alt=""/>
        <img src="../public/빠니보틀.PNG" style={{width: '400px', height: 'auto'}} alt=""/>
        <img src="../public/원지.PNG" style={{width: '400px', height: 'auto'}} alt=""/>
      </div>
        <div className='btn'>
        <button>Read More <i class="fa-solid fa-angle-down"></i></button>
        </div>
      
    </div>
  )


}

export default Introduce;

