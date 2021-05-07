import { BrowserRouter, Route, Switch } from  'react-router-dom'

import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      
      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='/dashboard'>
        <Dashboard />
      </Route>

    </Switch>
    </BrowserRouter>
  )
}