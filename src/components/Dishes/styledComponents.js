import styled from 'styled-components'

export const DishItem = styled.li`
    min-height: 20vh;
    border: solid 1px;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`
export const LeftContainer = styled.div`
    display: flex;
    width:70%;
`

export const TypeIconBox = styled.div`
    height: 35px;
    width: 35px;
    border: solid 2px ${props => (props.dishType === 2 ? 'green' : 'red')};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TypeIcon = styled.div`
    height: 25px;
    width:25px;
    border-radius: 50%;
    background-color: ${props => (props.dishType === 2 ? 'green' : 'red')};
`
export const DetailsContainer = styled.div`
    height: 100%;
    padding-left: 10px;
    
`

export const DishName = styled.h1`
    font-size: 16px;
    margin: 0px;
`
export const DishCurrency = styled.p`
    font-size: 14px;
    color: #636261;
    margin: 5px 0 5px 0;
    font-weight: bold;
`

export const CurrencyPriceContainer = styled.div`
    display: flex;
    gap : 5px;
    margin: 0px;
`
export const Description = styled.p`
    font-size: 14px;
    color: #9e9b9b;
    margin: 0px;
`
export const ButtonContainer = styled.div`
    height: 40px;
    width: 130px;
    background-color: green;
    border-radius: 50px;
    margin: 5px 0 5px 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    font-size: 32px;
    color: #ffffff;
    cursor: pointer;
`

export const Count = styled.p`
    color: #fff;
    font-size: 20px;
`
export const Customization = styled.p`
    color: blue;
    font-size: 16px;
    margin: 0px;
`
export const Calories = styled.p`
    font-size: 14px;
    color: orange;
    display: flex;
    align-items: center;
    margin: 3px;
    font-weight: bold;
`
export const DishImage = styled.img`
    height: 70px;
    width: 70px;

    @media screen and (min-width: 768px){
        height: 120px;
        width: 120px;
    }
`
