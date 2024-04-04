import styled from 'styled-components'

export const Conteiner = styled.div``

export const ProductImage = styled.img`
  width: 100%;
`
export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '2px solid #9758A6'};
  color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
`
