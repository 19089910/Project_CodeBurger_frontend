import styled from 'styled-components'

export const Conteiner = styled.div`
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;

  /* square buttons */
  .rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
  }

  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
  }

  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    border: nome;
    background-color: #bebebf;
    color: #efefef;
  }
`

export const CategoryImage = styled.img``

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`

export const Button = styled.button`
  margin-top: 16px;
  background: #9758a6;
  border-radius: 8px;

  height: 50px;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;

  cursor: poiter;
  &:hover {
    opacity: 0.8;
  }

  &active {
    opacity: 0.6;
  }
`
