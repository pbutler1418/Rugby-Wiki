import React, {Component} from "react"
import axios from "axios"
import Search from "../components/Search"
const API_KEY = "4013017"


class TeamInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      teams: [],
      input: [],
      searchQuery: ''
    }
  }

  fetchInfo = async (searchQuery) => {
    try {
      const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_teams.php?s=Rugby&c=${searchQuery}`)
      console.log(response)
      this.setState({
        teams:response.data
      })

    }
    catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
  
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }

  handleSubmit = event => { 
    event.preventDefault()
    this.fetchInfo(this.state.searchQuery)
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
        <Search
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
        />
        {clubs}
      </>
    )
  }
  }


export default TeamInfoPage