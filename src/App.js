import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'
import { publicRouter } from './Routes/PublicRouter'
import classNames from 'classnames/bind'
import styles from './App.scss'

const cx = classNames.bind(styles)

function App() {
  return (
    <Router>
      <div className={cx('App')}  >
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
