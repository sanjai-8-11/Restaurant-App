import {Component} from 'react'
import RestaurantContext from '../../context/RestaurantContext'
import Menus from '../Menus'
import Dishes from '../Dishes'
import {MenuContainer, DishesListContainer} from './styledComponents'

class Home extends Component {
  state = {menuList: []}

  componentDidMount() {
    this.getDishes()
  }

  getDishes = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    try {
      const response = await fetch(url)
      const data = await response.json()

      const updatedMenuList = data[0].table_menu_list.map(each => ({
        categoryDishes: each.category_dishes.map(dishes => ({
          addonCat: dishes.addonCat.map(addOns => ({
            addonCategory: addOns.addon_category,
            addonCategoryId: addOns.addon_category_id,
            addonSelection: addOns.addon_selection,
            addOns: addOns.addons,
          })),
          dishAvailability: dishes.dish_Availability,
          dishType: dishes.dish_Type,
          dishCalories: dishes.dish_calories,
          dishCurrency: dishes.dish_currency,
          dishDescription: dishes.dish_description,
          dishId: dishes.dish_id,
          dishImage: dishes.dish_image,
          dishName: dishes.dish_name,
          dishPrice: dishes.dish_price,
          nexturl: dishes.nexturl,
        })),
        menuCategory: each.menu_category,
        menuCategoryId: each.menu_category_id,
        menuCategoryImage: each.menu_category_image,
        nexturl: each.nexturl,
      }))

      this.setState({
        menuList: updatedMenuList,
      })
    } catch (err) {
      console.log(`Error Message: ${err}`)
    }
  }

  onUpdateCount = (id, count) => {
    
  }

  render() {
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {activeMenuId} = value
          const {menuList} = this.state

          const filter = menuList.find(
            each => each.menuCategoryId === activeMenuId,
          )

          const categoryDishesList = filter?.categoryDishes || []
          console.log(categoryDishesList)
          return (
            <>
              <MenuContainer>
                {menuList.map(each => (
                  <Menus menu={each} key={each.menuCategoryId} />
                ))}
              </MenuContainer>
              <DishesListContainer>
                {categoryDishesList.map(each => (
                  <Dishes
                    categoryDishes={each}
                    key={each.dishId}
                    onUpdateCount={this.onUpdateCount}
                  />
                ))}
              </DishesListContainer>
            </>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default Home
