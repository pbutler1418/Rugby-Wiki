import React, {Component} from "react"
import axios from "axios"
import Search from "../components/Search"
const API_KEY = "4013017"

class LeagueInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      league: [],
      input: [],
      searchQuery: ``
    }
  }

  fetchInfo = async (searchQuery) => {
    try {
      const response = await axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_leagues.php?c=${searchQuery}&s=Rugby`)
      console.log(response)
      this.setState({
        league:response.data
      })

    }
    catch (error) {
      console.log(error)
    }
  }

  handleChange = event => {
    console.log(event.target.value)
    this.fetchInfo(event.target.value)
    
    // this.setState({
    //   [event.target.name]: event.target.value
      
    // })
  }

  handleSubmit = event => { 
    event.preventDefault()
    // this.fetchInfo(this.state.searchQuery)
  }
  

  render() {
    console.log(this.state.league)

    let comps = this.state.league.length !== 0 && this.state.league.countrys.map((comp, index) => {
      return <div key={index}>
        <h2>{comp.strLeague}</h2>
        <h2>Year Founded: {comp.intFormedYear}</h2>
        <img src={comp.strFanart1} alt="rugby" />
        <h2>Description</h2>
        <p className="text">{comp.strDescriptionEN}</p>

      </div>

    })

    let countries = ["","Worldwide","England", "Australia", "France", "International", "Europe"]
    let options = countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
      
    ))
    return (
      <>
        <h1>League Info</h1>
        <select value={this.state.value} onChange={this.handleChange}>
          {options}
          </select> 

        {comps}
      </>
    )
  }
}


export default LeagueInfoPage