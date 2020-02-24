import React, {Component} from "react"
import axios from "axios"
import TEAM_URL from "../components/constants"

class TeamInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      teams: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(TEAM_URL)
console.log(response)
      this.setState({
        teams: response.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.teams)

    let clubs = this.state.teams.length !== 0 && this.state.teams.teams.map((club, index) => {
      return (
        <div key={index}>
          <h2>{club.strTeam}</h2>
          <img src={club.strTeamBadge}/>
        </div>
      )
    }) 
    return (
      <>
        <h1>Teams Info</h1>
        {clubs}
      </>
    )
  }
  }


export default TeamInfoPage