import { styled } from 'styled-components'

export const UserContainer = styled.div`
  margin-top: -2rem;
  max-width: 1120px;
  width: 100%;
  margin: -6rem auto;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
`

export const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 148px 1fr;
  align-items: center;
  padding: 2.5rem 2rem;
  gap: 1.5rem;
  img {
    height: 148px;
    border-radius: 8px;
    width: 100%;
  }
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserTitle = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme['base-title']};
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }
`

export const UserDescription = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  text-align: left;
  word-break: break-all;
  margin: 8px 0 24px 0;
`

export const UserTrivia = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-text']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
