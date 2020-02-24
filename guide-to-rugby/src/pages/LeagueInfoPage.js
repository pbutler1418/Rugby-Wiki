import React, {Component} from "react"
import axios from "axios"
import LeagueInfo from "../components/LeagueInfo"
import LEAGUE_INFO from "../components/constants"

class LeagueInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      league: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(LEAGUE_INFO)
      console.log(response)
      this.setState({
        league: response.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.league)
    // let countries = this.state.league.length !== 0 

    // console.log(countries)
    let comps = this.state.league.length !== 0 && this.state.league.countrys.map((comp, index) => {
      return <div key={index}>
        <h2>{comp.strLeague}</h2>
        <h2>Year Founded: {comp.intFormedYear}</h2>
        <img src={comp.strFanart1} />
        <h2>Description</h2>
        <p className = "text">{comp.strDescriptionEN}</p>

      </div>
    })
    return (
      <>
        <LeagueInfo/>
        {comps}
      </>
    )
  }
  }


export default LeagueInfoPage