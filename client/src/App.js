import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router } from 'react-router-dom'

import { useRoutes } from './routes'
function App() {
  const routes = useRoutes(false)
  return (
    <Router>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
      </Helmet>
      <div className="container">
        {routes}
      </div>
    </Router>
  )
}

export default App
