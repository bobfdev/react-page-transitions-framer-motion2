import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdReorder} from 'react-icons/md';
import Logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='navbar'>
        <div className="leftSide" id={isOpen ? 'open' : 'close'}>
            <img src={Logo} alt="" />
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNav}>
                    <MdReorder />
                </button>
        </div>
    </div>
  )
}

export default Navbar