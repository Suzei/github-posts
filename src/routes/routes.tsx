import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Issue } from '../pages/Issue'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issue/:number" element={<Issue />}></Route>
    </Routes>
  )
}
