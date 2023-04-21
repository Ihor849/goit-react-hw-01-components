import styled from '@emotion/styled'

export const FriendListItem = styled.li`
  padding: ${props => props.theme.fontSize(4)};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.purple};
  border-radius: ${props => props.theme.spacing(3)};

`
export const Avatar = styled.img`
    width: ${props => props.theme.spacing(18)};
  margin-left: ${props => props.theme.spacing(5)};
  border-radius: ${props => props.theme.spacing(1)};
`
export const Name = styled.p`
    margin-left: ${props => props.theme.spacing(10)};
  font-size: ${props => props.theme.spacing(5)};
  font-weight: 700;
`

export const Status = styled.span`
 width: ${props => props.theme.spacing(5)};
  height: ${props => props.theme.spacing(5)};
  border-radius: 50%;
  background-color: ${({ online, theme }) => {
    return (online ? props =>  props.theme.colors.brightgreen  :  props => props.theme.colors.red) 
    
  
  }
} 
`