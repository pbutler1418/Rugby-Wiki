import React from 'react';
import './App.css';
import TeamInfo from "./pages/TeamInfo"
import Home from "./pages/Home"
import MatchCenter from "./pages/MatchCenter"
import LeagueInfo from "./pages/LeagueInfo"
import PlayerInfo from "./pages/PlayerInfo"
import Highlights from "./pages/Highlights"

import {
  Route,
  NavLink,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <div classname="links">
          <nav>
          <NavLink
            exact
            to={'/'}
            activeClassName={"active"}
          >
            Home
            </NavLink>
          <NavLink
            exact
            to={'/teamInfo'}
            activeClassName={"active"}
          >
            Team Info
          </NavLink>  
          <NavLink
            exact
            to={'/leagueInfo'}
            activeClassName={"active"}
          >
            League Info
          </NavLink> 
          <NavLink
            exact
            to={'/matchCenter'}
            activeClassName={"active"}
          >
            Match Center
          </NavLink> 
          <NavLink
            exact
            to={'/playerInfo'}
            activeClassName={"active"}
          >
            Player Info
          </NavLink> 
          <NavLink
            exact
            to={'/highlights'}
            activeClassName={"active"}
          >
            Highlights
          </NavLink> 
          </nav>
      </div>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teamInfo" component={TeamInfo} />
          <Route path="/leagueInfo" component={LeagueInfo} />
          <Route path="/matchCenter" component={MatchCenter} />
          <Route path="/playerInfo" component={PlayerInfo} />
          <Route path="/highlights"component={Highlights} />
        </Switch>
      </main>
        
    </div>
  )
}

export default App;
