import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { HomeContainer, HomeHeaderWrapper } from './styles'
export function Home() {
  return (
    <HomeContainer>
      <Header />
      <User />
      <HomeHeaderWrapper></HomeHeaderWrapper>
    </HomeContainer>
  )
}
