import styled from 'styled-components'

export const Menu = styled.li`
    font-size: 18px;
    height: 100%;
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => (props.color ? '#f72d33' : '#000')};
    
    border-bottom: ${props => (props.color ? 'solid' : 'none')} ${props =>
      props.color ? '#f72d33' : '#000'};
`
