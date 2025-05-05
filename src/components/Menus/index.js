import {Component} from 'react'
import {Menu, Button} from './styledComponents'
import RestaurantContext from '../../context/RestaurantContext'

const Menus = props => {
  const {menuCategory, menuCategoryId} = props.menu
  return (
    <RestaurantContext.Consumer>
      {value => {
        const {activeMenuId, changeMenuCategory} = value

        const changeMenu = () => {
          changeMenuCategory(menuCategoryId)
        }

        const isSelected = menuCategoryId === activeMenuId
        console.log(isSelected)
        return (
          <Menu>
            <Button type="Button" color={isSelected} onClick={changeMenu}>
              {menuCategory}
            </Button>
          </Menu>
        )
      }}
    </RestaurantContext.Consumer>
  )
}

export default Menus
