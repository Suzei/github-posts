import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background: url(${(props) => props.theme.cover}) no-repeat;
  background-size: cover;
  padding: 8.375rem 0;
`
