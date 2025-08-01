import {Link} from 'react-router-dom';
import ScrollTop from './ScrollTop';

function Bottom() {
  return (
    <div className="bottom">
      <div className="logo">
        <ScrollTop />
        <Link to="/">
          <h3>여행합니다</h3>
        </Link>
      </div>
      <div className="right-content">
        <ul className="text-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/introduce">Introduce</Link>
          </li>
          <li>
            <Link to="/contents">Contents</Link>
          </li>
        </ul>
        <div className="icon-links">
          <a href="https://www.youtube.com/@YEOMI" target="_blank" rel="noopener noreferrer" className="image-link">
            <i className="fa-brands fa-youtube fa-2x" style={{ color: 'red' }}></i>
          </a>
          <a href="https://www.instagram.com/yeomi.travel/" target="_blank" rel="noopener noreferrer" className="image-link">
            <i className="fa-brands fa-square-instagram fa-2x" style={{ color: 'pink' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bottom;