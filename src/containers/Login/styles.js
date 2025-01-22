import styled from 'styled-components'

import Background from '../../assets/backgraund.svg'

export const Container = styled.div`
  // layout
  height: 100vh;
  width: 100vw;
  background: url('${Background}');
  display: Flex;
  justify-content: center;
  align-items: center;
`
export const LoginImage = styled.img`
  // layout
  height: 90%;
`
export const ContainerItens = styled.div`
  // layout
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 90%;
  // internally
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    // layout
    margin-top: 0px;
    // typography
    color: #fff;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    // internally
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`
export const Label = styled.p`
  // layout
  margin-top: 16px;
  margin-bottom: 5px;
  // typography
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`
export const Input = styled.input`
  // layout
  width: 390px;
  height: 38px;
  // style
  border-radius: 5px;
  box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
  border: ${(props) => (props.error ? '2px solid #cc1717' : 'none')};
  // internally
  padding-left: 10px;
`

export const SingInLink = styled.p`
  // typography
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
