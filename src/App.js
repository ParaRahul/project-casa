import React from 'react'
import Club from './Components/Club'
import Home from './Components/Home'
import Events from './Components/Events'
import Contact from './Components/Contact'
import Tourism from './Components/Tourism'
import BusinessOpp from './Components/BusinessOpp'
import { BrowserRouter,Route,Switch } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div id="soaring-body">
      
        <div className="App">        
          <Switch>
            <Route path="/events" component={Events} />
            <Route path="/club" component={Club} />
            <Route path="/contact" component={Contact} />
            <Route path="/business" component={BusinessOpp} />
            <Route path="/tourism" component={Tourism} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}


