import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { IssueCard } from '../../components/IssueCard'
import { User } from '../../components/HeaderCard'
import { HomeContainer, HomeHeaderWrapper } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
import { SearchInput } from '../../components/SearchInput'
export function Home() {
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })



  return (
    <HomeContainer>
      <Header variant='user' />
      <main>
        <SearchInput />
        <HomeHeaderWrapper>
          {issues?.map((item) => (
            <IssueCard key={item.title} {...item} />
          ))}
        </HomeHeaderWrapper>
      </main>
    </HomeContainer>
  )
}
