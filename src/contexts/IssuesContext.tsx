import { createContext } from 'use-context-selector'
import { ReactNode, useState, useEffect, useCallback } from 'react'
import { User } from '../interfaces/User'
import { api } from '../lib/api'

interface IssuesContextProps {
  user?: User
}

export const IssuesContext = createContext({} as IssuesContextProps)

export const IssuesContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [user, setUser] = useState<User>()

  const GetUser = useCallback(async () => {
    const { data } = await api.get<User>('users/Suzei')
    setUser(data)
  }, [])

  useEffect(() => {
    GetUser()
  }, [])

  return (
    <IssuesContext.Provider value={{ user }}>{children}</IssuesContext.Provider>
  )
}
