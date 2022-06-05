import React from 'react'
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from "react-icons/ai";
import { SiDoordash } from "react-icons/si";
import '../styles/Footer.css';


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <SiDoordash />
        </div>
        <p>&copy; 2022 Papa's Pizza</p>
    </div>
  )
}

export default Footer