import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'
import { HeaderCard } from '../HeaderCard'

export function Header({ variant }: { variant: 'user' | 'issue' }) {
  return (
    <>
      <HeaderContainer>
        <img
          src={Logo}
          alt="Logo escrito: Github Blog em letras maiúsculas, com uma seta para direita e um underline"
        />
      </HeaderContainer>
      <HeaderCard variant={variant} />
    </>
  )
}
