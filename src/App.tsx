import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/defaultTheme'
import { GlobalStyle } from './styles/GlobalTheme'
import { AppRoutes } from './routes/routes'
import { IssuesContextProvider } from './contexts/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssuesContextProvider>
        <GlobalStyle />
        <AppRoutes />
      </IssuesContextProvider>
    </ThemeProvider>
  )
}

export default App
