import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'

// Containers
import Sidebar from './containers/Sidebar/Sidebar'
import Toolbar from './containers/Toolbar/Toolbar'
// Pages
import Ideas from './pages/Ideas/Ideas'
import Agents from './pages/Agents/Agents'
import Tickets from './pages/Tickets/Tickets'
import Contacts from './pages/Contacts/Contacts'
import Articles from './pages/Articles/Articles'
import Overview from './pages/Overview/Overview'
import Settings from './pages/Settings/Settings'
import Subscription from './pages/Subscription/Subscription'

function App() {
  const [activePage, setActivePage] = useState('')

  return (
    <Router>
      <div className="app">
        <Sidebar activePage={activePage} setActivePage={setActivePage}/>

        <div className="content">
          <Toolbar activePage={activePage} />

          <Switch>
            <Route path="/" component={Overview} exact />
            <Route path="/overview" component={Overview} />
            <Route path="/tickets" component={Tickets} />
            <Route path="/ideas" component={Ideas} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/agents" component={Agents} />
            <Route path="/articles" component={Articles} />
            <Route path="/settings" component={Settings} />
            <Route path="/subscription" component={Subscription} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
