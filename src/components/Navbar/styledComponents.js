import styled from 'styled-components'

export const Nav = styled.nav`
    height: 60px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #d1d0cd;
`

export const CompanyName = styled.h1`
    font-size: 25px;
`

export const CartCountContainer = styled.div`
    background-color: red;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 32px;
    left: 10px;
`
export const CartCount = styled.p`
    color: #fff;
    font-size: 10px;
`