import {Component} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RestaurantContext from './context/RestaurantContext'

import './App.css'

class App extends Component {
  state = {activeMenuId: '11', cartList: []}

  changeMenuCategory = menuId => {
    this.setState({activeMenuId: menuId})
  }

  updateCartList = dishId => {
    this.setState(prevCart => ({
      cartList: [...new Set([...prevCart.cartList, dishId])],
    }))
  }
  
  render() {
    const {activeMenuId, cartList} = this.state
    return (
      <RestaurantContext.Provider
        value={{
          activeMenuId,
          changeMenuCategory: this.changeMenuCategory,
          cartList,
          updateCartList: this.updateCartList,
        }}
      >
        <>
          <Navbar />
          <Home />
        </>
      </RestaurantContext.Provider>
    )
  }
}

export default App
