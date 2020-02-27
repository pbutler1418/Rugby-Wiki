import React, { Component } from "react"
import axios from "axios"
import SearchByTeam from "../components/SearchByTeam"
const API_KEY = "4013017"
// export const TEAM_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=Saracens`
// 135338

class PlayerInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      players: [],
      input: [],
      searchQuery: ''
    }
  }

  fetchInfo = async (searchQuery) => {
    try {
      const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=${searchQuery}`)
      console.log(response)
      this.setState({
        players:response.data
      })

    }
    catch (error) {
      alert("We don't have information for that. Refresh the page and try again!") 
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
    console.log(this.state.players)

    let individuals = this.state.players.length !== 0 && this.state.players.player.map((guy, index) => {
      return (
        <div key={index}>
          <h2>{guy.strPlayer}</h2>
          <h2>{guy.strTeam}</h2>
          <img src={guy.strThumb} />
          <p>{guy.strDescriptionEN}</p>
        </div>
      )
    }) 
    return (
      <>
        <h1>Player Info</h1>
        <SearchByTeam
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
        />
        <p>Beta only works for teams in the English Premiership (Try "Saracens" or "Exeter Chiefs")</p>
        {individuals}
      </>
    )
  }
  }


export default PlayerInfoPage