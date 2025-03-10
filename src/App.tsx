import { Routes, Route, RouterProvider, createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { Education } from './pages/Education';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Skills } from './pages/Skills';

function Root() {
  return (
    <Routes>
      <Route path={`/`} element={<Home />} />
      <Route path={`/education/`} element={<Education />} />
      <Route path={`/experience/`} element={<Experience />} />
      <Route path={`/projects/`} element={<Projects />} />
      <Route path={`/contact/`} element={<Contact />} />
      <Route path={`/skills/`} element={<Skills />} />
    </Routes>
  )
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root },]
)

function App() {
  return <RouterProvider router={router} />
}

export default App
