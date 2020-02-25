import React, { Component } from "react"
import axios from "axios"
const API_KEY = "4013017"
export const TEAM_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=Leicester_Tigers`

class PlayerInfoPage extends Component {
  constructor() {
    super()

    this.state = {
      players: []
    }
  }


  async componentDidMount() {
    try {
      const response = await axios.get(TEAM_URL)
      console.log(response)

      this.setState({
        players: response.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.players)

    let individuals = this.state.players.length !== 0 && this.state.players.player.map((player, index) => {
      return (
      <>
        <div key={index}></div>
          <img src={player.strThumb} />
          <h2>{player.strPlayer}</h2>
          <h3>{player.strTeam}</h3>
          <p className = "text">{player.strDescriptionEN}</p>
      </>
    )
    })
    return (
      <>
        <h1>Player Info</h1>
        {individuals}
      </>
    )
  }

}

export default PlayerInfoPage