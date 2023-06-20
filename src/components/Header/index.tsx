import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'
import { HeaderCard } from '../HeaderCard'
import { Link } from 'react-router-dom'

export function Header({ variant }: { variant: 'user' | 'issue' }) {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img
            src={Logo}
            alt="Logo escrito: Github Blog em letras maiúsculas, com uma seta para direita e um underline"
          />
        </Link>
      </HeaderContainer>
      <HeaderCard variant={variant} />
    </>
  )
}
