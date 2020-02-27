import React, { Component } from "react"
import axios from "axios"
const API_KEY = "4013017"
export const HIGHLIGHTS_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}/eventshighlights.php?s=Rugby`

class HighlightsPage extends Component {
  constructor() {
    super()

    this.state = {
      highlights: []
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(HIGHLIGHTS_URL)
      console.log(response)
      this.setState({
        highlights: response.data
      })
    }
    catch (error) {
      alert("We don't have information for that. Refresh the page and try again!")
    }
  }

  render() {
    console.log(this.state.highlights)


    let reels = this.state.highlights.length !== 0 && this.state.highlights.tvhighlights.map((highlight, index) => {
      console.log(highlight.strVideo.substring(highlight.strVideo.indexOf("=")+1))
      const youtubeId = highlight.strVideo.substring(highlight.strVideo.indexOf("=")+1)

      return (
        <div key={index}>
          <h2>{highlight.strEvent}</h2>
          
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      )
    })
    return (
      <>
        <h1>Highlights</h1>
        {reels}
      </>
    )
  }
}

// return (
//   <h1>Highlights</h1>
// )

export default HighlightsPage