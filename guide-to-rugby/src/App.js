import React from 'react';
import './App.css';
import TeamInfoPage from "./pages/TeamInfoPage"
import Home from "./pages/Home"
import LeagueInfoPage from "./pages/LeagueInfoPage"
import PlayerInfoPage from "./pages/PlayerInfoPage"
import HighlightsPage from "./pages/HighlightsPage"


import {
  Route,
  NavLink,
  Switch
} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <div className="links">
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
          <Route path="/teamInfo" component={TeamInfoPage} />
          <Route path="/leagueInfo" component={LeagueInfoPage} />
          <Route path="/playerInfo" component={PlayerInfoPage} />
          <Route path="/highlights"component={HighlightsPage} />
        </Switch>
      </main>
        
    </div>
  )
}

export default App;
