import React from 'react'

const RestaurantContext = React.createContext({
  activeMenuId: '11',
  chageMenuCategory: () => {},
  cartList: [],
  updateCartList: () => {},
})

export default RestaurantContext
