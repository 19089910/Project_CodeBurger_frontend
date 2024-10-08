import reactSelect from 'react-select'
import styled from 'styled-components'

export const Conteiner = styled.div`
  background-color: #efefef;
  min-height: 100vh;
`

export const ProductsImg = styled.img`
  width: 80px;
  border-radius: 5px;
`
export const ReactSelectStyle = styled(reactSelect)`
  width: 250px;

  .css-13cymwt-control {
    cursor: pointer;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : '400')};
  border-bottom: ${(props) =>
    props.isActiveStatus ? '3px solid #9758A9' : 'none'};
  padding-bottom: 5px;
`
