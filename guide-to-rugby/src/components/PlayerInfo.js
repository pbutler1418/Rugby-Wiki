import React, { Component } from "react"
import axios from "axios"
const API_KEY = "4013017"
export const TEAM_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/searchplayers.php?t=Arsenal`

class PlayerInfo extends Component {
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
    return (
      <h1>Player Inf</h1>
    )
  }

}

export default PlayerInfo