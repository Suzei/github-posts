import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={Logo}
        alt="Logo escrito: Github Blog em letras maiúsculas, com uma seta para direita e um underline"
      />
    </HeaderContainer>
  )
}
