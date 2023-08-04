import './App.css'
import HomePage from './pages/Home'
import CharityProfile from './pages/CharityProfile'
import Header from './components/Header/Header'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage /> 
  },
  {
    path: '/charity/:id',
    element: <CharityProfile /> 
  },
  {
    path: '*',
    element: <HomePage /> 
  }  
])

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
