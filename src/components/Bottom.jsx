function Bottom () {
  return (
    <div className='bottom'>
      <a href="http://localhost:5173/" style={{color:'lightgray'}}>
        <h3>여행합니다</h3>
      </a>
      <ul>
        <li>
          <a href="http://localhost:5173/" style={{color:'lightgray'}}>Home</a>
        </li>
        <li>
          <a href="http://localhost:5173/introduce" style={{color:'lightgray'}}>Introduce</a>
        </li>
        <li>
          <a href="http://localhost:5173/contents" style={{color:'lightgray'}}>business</a>
        </li>
         <a href="https://www.youtube.com/@YEOMI" target='_blank' rel="noopener noreferrer" className='image-link'>
          <i class="fa-brands fa-youtube fa-2x " style={{color: 'red'}}></i>
        </a>
        <a href="https://www.instagram.com/yeomi.travel/" target='_blank' rel="noopener noreferrer" className='image-link'>
          <i class="fa-brands fa-square-instagram fa-2x" style={{color: 'pink'}}></i>
        </a>
      </ul>
    </div>
  )
}

export default Bottom;
