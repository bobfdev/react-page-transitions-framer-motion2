import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <motion.div 
      className='home' 
      style={{ backgroundImage: `url(${BannerImage})` }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="headerContainer">
        <h1>Papa's Pizza</h1>
        <p>Pizza Made to Perfection!</p>
        <Link to='/menu'>
          <button>Order Now</button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Home