import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import { publicRouter } from './Routes/PublicRouter'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout


            return <Route key={index} path={route.path} element={<Layout> <Page /></Layout>} />
          })
          }

        </Routes>
      </div>
    </Router>




  )
}

export default App
