import {
  GithubLogo,
  Buildings,
  Users,
  ArrowSquareUpRight,
} from 'phosphor-react'
import { IssuesContext } from '../../contexts/IssuesContext'
import {
  UserContainer,
  UserDescription,
  UserInfo,
  UserTitle,
  UserTrivia,
  UserWrapper,
} from './styles'
import { useContextSelector } from 'use-context-selector'

interface HeaderCardProps {
  variant: 'issue' | 'user'
}
export function HeaderCard({ variant }: HeaderCardProps) {
  const user = useContextSelector(IssuesContext, (context) => {
    return context.user
  })

  const singleIssue = useContextSelector(IssuesContext, (context) => {
    return context.singleIssue
  })

  return (
    <UserContainer>
      <UserWrapper>
        {variant === 'user' ? (
          <>
            <img src={user?.avatar_url} alt="Imagem de usuário" />
            <UserInfo>
              <UserTitle>
                <h2>{user?.name}</h2>

                <a href="">
                  Github <ArrowSquareUpRight size={18} weight="bold" />
                </a>
              </UserTitle>
              <UserDescription>{user?.bio}</UserDescription>

              <UserTrivia>
                <div>
                  <GithubLogo size={18} />
                  <span>{user?.login}</span>
                </div>

                <div>
                  <Buildings size={18} />
                  <span>{user?.company}</span>
                </div>

                <div>
                  <Users size={18} />
                  <span>{user?.followers} seguidores</span>
                </div>
              </UserTrivia>
            </UserInfo>
          </>
        ) : (
          <h2>oi</h2>
        )}
      </UserWrapper>

    </UserContainer>
  )
}
