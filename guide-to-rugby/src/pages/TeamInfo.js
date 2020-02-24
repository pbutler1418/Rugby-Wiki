import React, {Component} from "react"
import axios from "axios"
import BASE_URL from "../components/constants"

class TeamInfo extends Component {
  constructor() {
    super()
    
    this.state = {
      teams: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(BASE_URL)

      this.setState({
        teams: response.data
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  render() {
    let info = this.state.teams
    console.log(info)

    return (
      <>
        <h1>Rugby</h1>
      </>
    )
  }
  }
  // return (
  //   <div className="App">
  //     <h1>Rugby</h1>
  //   </div>
  // );


export default TeamInfo