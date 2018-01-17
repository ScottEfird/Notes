import styled from 'styled-components'
import { GRAY, BLUE_GRAY } from '../../../style/colors'

export const NoteGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: space-evenly;
  flex-flow: row wrap;
`

export const CardBody = styled.div`
  height: 340px;
  width: 410px;
  margin: 15px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 7px 29px 1px rgba(235,235,235,1);
`

export const TextBody = styled.div`
  color: ${GRAY};
  font-size: 18px;
  margin: 20px;
`

export const CardColorBar = styled.div`
width: 410px;
height: 10px;
border-radius: 10px 10px 0px 0px;
position: absolute;
background-color: ${props => props.color};
`

export const TitleBar = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 26px;
  color: ${GRAY};
  justify-content: space-around;
`

export const Title = styled.div`
  font-size: 26px;
  color: ${BLUE_GRAY};
`

export const Hr = styled.hr`
  color: ${GRAY};
  width: 100%; 
  height: 1px;
`