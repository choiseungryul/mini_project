import './Contents.css'

function Contents () {
  return (
    <div className='ctn'>
      <div className='ctn-header'>
        <h1>전 세계적으로 퍼져있는 컨텐츠를 활용한 <br />
          여행합니다 만의 최적의 마케터 전략</h1>
      </div>
      <div className='ctn-main'>
        <div className='stat'>
         <h4>유튜브 구독</h4>
         <h2 style={{color: 'red'}}>00명 +</h2>
        </div>
        <div className="stat">
         <h4>유튜브 조회</h4>
         <h2 style={{color: 'red'}}>00뷰 +</h2>
        </div>
        <div className="stat">
         <h4>인스타그램 팔로워</h4>
         <h2 style={{color: 'red'}}>00명 +</h2>
        </div>
        <div className="stat">
         <h4>인스타그램 릴스</h4>
         <h2 style={{color: 'red'}}>00회 +</h2>
        </div>
      </div>

      <div className='ytb-header'>
      <i class="fa-brands fa-youtube fa-3x" style={{color: 'red'}}></i>
      <h2>Youtube</h2>
      </div>
      <div className='ytb-img'>
        <img src="https://placehold.co/400x500" alt=""/>
        <img src="https://placehold.co/400x500" alt=""/>
        <img src="https://placehold.co/400x500" alt=""/>
      </div>
      <div className='ytb-btn'>
        <button>Read More <i class="fa-solid fa-angle-down"></i></button>
      </div>

      <div className='insta'>
        <div className="insta-header">
          <i class="fa-brands fa-instagram fa-3x" style={{color: 'pink'}}></i>
          <h2>Instagram</h2>
        </div>
        <div className='insta-img'>
          <img src="https://placehold.co/400x500" alt=""/>
          <img src="https://placehold.co/400x500" alt=""/>
          <img src="https://placehold.co/400x500" alt=""/>
        </div>
        <div className='insta-btn'>
          <button>Read More <i class="fa-solid fa-angle-down"></i></button>
        </div>
      </div>
    </div>

  )
}

export default Contents;