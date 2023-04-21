import styled from '@emotion/styled'

export const TitleText = styled.h2`
  flex-basis: 100%;
  text-transform: uppercase;
  text-align: center;
  background-color:${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-left: 2px solid  ${props => props.theme.colors.grey};
  border-right: 2px solid  ${props => props.theme.colors.grey};
  border-top: 2px solid  ${props => props.theme.colors.grey};
  font-size: 16px;
  padding:30px;
`