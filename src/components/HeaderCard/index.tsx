import {
  GithubLogo,
  Buildings,
  Users,
  ArrowSquareUpRight,
  ChatCircleDots,
  CalendarBlank,
  CaretLeft
} from 'phosphor-react'
import { IssuesContext } from '../../contexts/IssuesContext'
import {
  BackTo,
  UserContainer,
  UserDescription,
  UserInfo,
  UserTitle,
  UserTrivia,
  UserWrapper,
} from './styles'
import { useContextSelector } from 'use-context-selector'
import { formatDate } from '../../utils/formatter'
import { Link } from 'react-router-dom'

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
      <UserWrapper variant={variant}>
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
          <>
            <UserWrapper variant={variant}>
              <BackTo>
                <Link to="/"><CaretLeft /> Voltar</Link>

                <Link to={singleIssue?.html_url}>
                  Github <ArrowSquareUpRight size={18} weight="bold" />
                </Link>
              </BackTo>
              <UserTitle>
                <h2>{singleIssue?.title}</h2>
              </UserTitle>
              <UserTrivia>
                <div>
                  <GithubLogo size={18} />
                  <span>{singleIssue?.user.login}</span>
                </div>

                <div>
                  <ChatCircleDots size={18} />
                  <span>{singleIssue?.comments} comentários</span>
                </div>

                <div>
                  <CalendarBlank size={18} />
                  <span>há {singleIssue?.created_at && formatDate(singleIssue?.created_at)}</span>
                </div>
              </UserTrivia>
            </UserWrapper>
          </>
        )}
      </UserWrapper>

    </UserContainer>
  )
}
