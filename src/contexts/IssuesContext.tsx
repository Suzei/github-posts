import { createContext } from 'use-context-selector'
import { ReactNode, useState, useEffect, useCallback } from 'react'
import { User } from '../interfaces/User'
import { api } from '../lib/api'
import { Issue } from '../interfaces/Issue'

interface IssuesContextProps {
  user?: User
  issues?: Issue[]
  singleIssue?: Issue
}

export const IssuesContext = createContext({} as IssuesContextProps)

export const IssuesContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [user, setUser] = useState<User>()
  const [issues, setIssues] = useState<Issue[]>([])
  const GetUser = useCallback(async () => {
    const { data } = await api.get<User>('users/Suzei')
    setUser(data)
  }, [])

  const GetIssues = useCallback(async (query?: string) => {
    const { data } = await api.get<Issue[]>('/repos/Suzei/github-posts/issues', {
      params: {
        q: query,
      },
    })
    setIssues(data)
    console.log(issues)
  }, [])

  useEffect(() => {
    GetUser()
    GetIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ user, issues }}>{children}</IssuesContext.Provider>
  )
}
