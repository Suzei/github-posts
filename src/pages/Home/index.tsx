import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { User } from '../../components/User'
import { HomeContainer, HomeHeaderWrapper } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
export function Home() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })
  return (
    <HomeContainer>
      <Header />
      <User />
      <HomeHeaderWrapper>
        {issues?.map((item) => (
          <IssueCard key={item.title} {...item} />
        ))}
      </HomeHeaderWrapper>
    </HomeContainer>
  )
}
