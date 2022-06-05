import { menuData } from '../data/menu-data.js'
import MenuCard from '../components/MenuCard.js'
import { motion } from 'framer-motion'
import '../styles/Menu.css'

function Menu() {
  return (
    <motion.div 
      className='menu'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='menuTitle'>Our Menu</h1>
      <div className="menuList">
        {menuData.map((item, key) => {
          return (
            <MenuCard
              key={key}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          )
        })}
      </div>
    </motion.div>
  )
}

export default Menu