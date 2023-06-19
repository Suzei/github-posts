import { styled } from 'styled-components'

export const HomeContainer = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-content: space-between;
  
  main {
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 8rem;
  }
`

export const HomeHeaderWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;
`

export const HomeWrapper = styled.div`
  display: flex;
`
