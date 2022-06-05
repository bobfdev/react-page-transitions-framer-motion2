import React from 'react'
import FullPizza from '../assets/FullPizza.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div 
        className="aboutTop"
        style={{ backgroundImage: `url(${FullPizza})` }}
      >
      </div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis corrupti neque expedita excepturi corporis alias accusantium vitae impedit, repellat error sit laudantium, temporibus, dolor voluptatem. Quam quas fugiat cum molestiae tempora temporibus tempore, sit doloremque quia vel, ullam porro eos velit laborum nisi. Adipisci, a? Amet laudantium repellat provident totam, maiores distinctio est. Officia culpa excepturi cupiditate reiciendis officiis doloribus magnam sunt nihil, nulla eaque quam! Tempore, assumenda. Quibusdam ea rerum libero deleniti dolorum error quaerat deserunt. Corrupti ducimus nesciunt dignissimos assumenda, perferendis pariatur excepturi libero voluptate neque inventore. Consequatur veniam dolore rem labore, asperiores molestiae nisi esse explicabo.</p>
      </div>
    </div>
  )
}

export default About