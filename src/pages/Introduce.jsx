import { useState } from 'react';
import './Introduce.css'

function Introduce ({content}) {
  const [contentCount, setContentCount] = useState(3);

  return (
    <div className='intro'>
        <div className='intro-header'>
        <h2 className='intro-title'>Intro Site</h2>
      <div className='intro-site'>
        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MDlfMTE2%2FMDAxNTk5NjQ4OTcxMDk1.ADcQ7yiykBnMmogYVaI0j3Cc4nsbOn9pM85xxpYKODQg.3ZPHsxfnbx9S3i86480TX07UXMHpq4_4y5k2u1kEJoQg.PNG.iw_0024%2F%25C1%25B6%25C1%25D8%25B1%25E2_%25BB%25E7%25B8%25C1_32446674%25BC%25D2%25BD%25C4__%25285%2529.png&type=sc960_832"
        style={{width: '500px', height: '400px'}} alt=""/>

        <div className='intro-subtitle'>
          <h2>여행합니다 회사는</h2>
          <p>2026년도에 설립되어 유튜브, 인스타그램 컨텐츠를 기반으로<br />
            크리에이터의 삶을 꿈꾸고 있는 사람들의 둥지가 되어주는 스타트업 회사입니다
            <br/><br/>
            세상에는 많은 여행지가 있습니다. 또한 사람들은 바쁜 일상속에서 벗어나서
            여행을 통해<br/>
            휴식과 추억을 쌓을 수 있는 기회를 가지고, 그러한 경험 이후에
            다시 일상으로 돌아올 수 있는 계기가 됩니다.<br/>
            <br/>
            여러분들의 바쁜 일상속으로부터
            행복한 추억을 쌓고 돌아오기까지 여행합니다가 책임지겠습니다.
          </p>
        </div>
      </div>
      </div>
      
        <h2 className='intro-thirdtitle'>Our Members</h2>
        <div className='intro-members'>
          {
            content.slice(0, contentCount).map((data, index) => (
              <a key={index} href={data.url} target="_blank" rel='noopener noreferrer'>
                <img
                  key={index}
                  src={`https://raw.githubusercontent.com/choiseungryul/picture/refs/heads/main/project_insta/${data.name}.PNG`}
                  alt={data.name}
                  style={{width: '300px', height: '500px'}}
                />
                <div className="overlay">인스타 이동하기</div>
              </a>
            ))
          }
        </div>
        <div className='btn'>
          {contentCount > content.length ? (
            alert("더 이상 없습니다")
          ) : (
            <button onClick={() => {
              setContentCount(contentCount +3);
            }}>Read More <i class="fa-solid fa-angle-down"></i></button>
          )}
        </div>
    </div>
  )

}

export default Introduce;

