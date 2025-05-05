import {
  Nav,
  CompanyName,
  CartCountContainer,
  CartCount,
} from './styledComponents'
import RestaurantContext from '../../context/RestaurantContext'
import {IoMdCart} from 'react-icons/io'

const NavBar = () => {
  return (
    <RestaurantContext.Consumer>
      {value => {
        const {cartList} = value

        return (
          <Nav>
            <CompanyName>UNI Resto Cafe</CompanyName>
            <div>
              <IoMdCart style={{fontSize: '20px', margin: '0px'}} />
              <CartCountContainer>
                <CartCount>{cartList.length}</CartCount>
              </CartCountContainer>
            </div>
          </Nav>
        )
      }}
    </RestaurantContext.Consumer>
  )
}

export default NavBar
