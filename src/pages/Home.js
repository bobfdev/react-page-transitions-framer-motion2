import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Papa's Pizza</h1>
        <p>Pizza Made to Perfection!</p>
        <Link to='/menu'>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home