import styled from 'styled-components'

export const Conteiner = styled.div`
  height: 72px;
  background-color: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`

export const ConteinerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#9758A6' : '#555555')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
`

export const ConteinerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`

export const ConteinerText = styled.div`
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
  }
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;

  cursor: pointer;
  color: #9758a6;
`
