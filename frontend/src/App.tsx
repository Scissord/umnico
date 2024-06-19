import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  Layout, Umnico,
  NotFound
} from '@pages';
// import { routes } from '@constants';

// const routes = [
//   ...require('./constants/routes/routes').default,
// ]

const routes = [
  // pages
  { path: "/", element: <Umnico /> },
  { path: "*", element: <NotFound /> },
]

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route 
            key={route.path} 
            path={route.path} 
            element={<Layout display={route.element}/>} 
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App
