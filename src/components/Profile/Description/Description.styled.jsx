import styled from '@emotion/styled'

export const DescriptionUser = styled.div`
  padding: ${props => props.theme.spacing(5)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${props=>props.theme.colors.white}; 
  
`
export const Avatar = styled.img`
    padding: ${props => props.theme.spacing(5)};
  width: ${props => props.theme.spacing(50)};
  background-color: ${props=>props.theme.colors.brightgreen}; 
  border-radius: 50%;
`
export const Name = styled.p`
  font-size: ${props => props.theme.spacing(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${props=>props.theme.colors.grey};
`
export const Tag = styled.p`
  font-size:  ${props => props.theme.fontSize(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props=>props.theme.colors.grey};
`
export const Location = styled.p`
  font-size: ${props => props.theme.fontSize(6)};
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${props=>props.theme.colors.grey};
`