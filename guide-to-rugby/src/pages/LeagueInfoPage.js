import React, {Component} from "react"
import axios from "axios"
import Search from "../components/Search"
const API_KEY = "4013017"
// const COUNTRY = "England"
// const LEAGUE_INFO = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_leagues.php?c=${COUNTRY}&s=Rugby`

class LeagueInfoPage extends Component {
  constructor() {
    super()
    
    this.state = {
      league: [],
      input: [],
      searchQuery: ``
    }
  }

  async componentDidMount() {
    // this.fetchInfo()
    // console.log(response)
    // this.setState({
    //   league: response.data
    // })
  }

  fetchInfo = async (searchQuery) => {
    try {
      // const response = await axios.get(LEAGUE_INFO)
      const inputData = []
      // this.state.input.forEach(async input => {
      //   const LEAGUE_INFO =
      //     await axios.get(`https://www.thesportsdb.com/api/v1/json/${API_KEY}/search_all_leagues.php?c=${input}&s=Rugby`)
      //   console.log(LEAGUE_INFO)
      //   inputData.push(LEAGUE_INFO.data)
      //   console.log(inputData)
      //   this.setState({
      //     input: inputData
      //   })
      //   console.log(input)
      // })

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
  
    this.setState({
      [event.target.name]: event.target.value
      
    })
  }

  handleSubmit = event => {
   
    event.preventDefault()
    // this.setState({
      // state => ({
      // input: [this.state.searchQuery.toLowerCase(), ...state.input],
      // searchQuery: ''
      // }),
      
    // }),
    this.fetchInfo(this.state.searchQuery)
  }
  

  render() {
    console.log(this.state.league)
    // let countries = this.state.league.length !== 0 

    // console.log(countries)
    let comps = this.state.league.length !== 0 && this.state.league.countrys.map((comp, index) => {
      return <div key={index}>
        <h2>{comp.strLeague}</h2>
        <h2>Year Founded: {comp.intFormedYear}</h2>
        <img src={comp.strFanart1} alt="rugby" />
        <h2>Description</h2>
        <p className="text">{comp.strDescriptionEN}</p>

      </div>
    })
    return (
      <>
        <h1>League Info</h1>
        <Search
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.searchQuery}
          name="searchQuery"
        />
        {comps}
      </>
    )
  }
}


export default LeagueInfoPage