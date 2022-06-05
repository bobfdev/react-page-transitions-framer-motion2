import { menuData } from '../data/menu-data.js'
import MenuCard from '../components/MenuCard.js'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
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
    </div>
  )
}

export default Menu