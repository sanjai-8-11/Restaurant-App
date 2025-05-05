import {useState} from 'react'
import RestaurantContext from '../../context/RestaurantContext'
import {
  DishItem,
  TypeIconBox,
  TypeIcon,
  DetailsContainer,
  DishName,
  DishCurrency,
  CurrencyPriceContainer,
  Description,
  ButtonContainer,
  Button,
  Count,
  Customization,
  Calories,
  DishImage,
  LeftContainer,
} from './styledComponents'

const Dishes = props => {
  const {categoryDishes, onUpdateCount} = props
  const {
    addonCat,
    dishName,
    dishType,
    dishAvailability,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishId,
    dishImage,
    dishPrice,
    nexturl,
  } = categoryDishes

  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])

  return (
    <RestaurantContext.Consumer>
      {value => {
        const {cartList, updateCartList} = value

        const decreaseCount = () => {
          setCount(prevCount => Math.max(prevCount - 1, 0))
        }

        const increaseCount = () => {
          setCount(prevCount => prevCount + 1)
          updateCartList(dishId)
        }

        onUpdateCount(dishId, count)

        return (
          <DishItem>
            <LeftContainer>
              <div>
                <TypeIconBox dishType={dishType}>
                  <TypeIcon dishType={dishType}></TypeIcon>
                </TypeIconBox>
              </div>
              <DetailsContainer>
                <DishName>{dishName}</DishName>
                <CurrencyPriceContainer>
                  <DishCurrency>{dishCurrency} </DishCurrency>
                  <DishCurrency>{dishPrice} </DishCurrency>
                </CurrencyPriceContainer>
                <Description>{dishDescription} </Description>

                <ButtonContainer>
                  <Button type="button" onClick={decreaseCount}>
                    -
                  </Button>
                  <Count> {count}</Count>
                  <Button type="button" onClick={increaseCount}>
                    +
                  </Button>
                </ButtonContainer>
                {addonCat.length > 0 ? (
                  <Customization>
                    Customizations <br />
                    Available
                  </Customization>
                ) : (
                  ''
                )}
              </DetailsContainer>
            </LeftContainer>
            <Calories>{dishCalories} calories </Calories>
            <DishImage src={dishImage} alt={dishName} />
          </DishItem>
        )
      }}
    </RestaurantContext.Consumer>
  )
}

export default Dishes
