import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      images: []
    }

    this.grabGifs = this.grabGifs.bind(this)
    this.getInputCallback = this.getInputCallback.bind(this)
  }

  getInputCallback(input){
    this.setState({
      searchText: input,
      images: []
    }, () => this.grabGifs())

  }

  grabGifs(){
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.searchText}&api_key=dc6zaTOxFJmzC&limit=3`)
      .then(resp => resp.json())
      .then(resp => {this.setState({
        images: resp.data
      })})
      .then(resp => console.log(resp))
      .then(resp => console.log(this.state))
  }

  render() {
    return(
      <div>
        <GifSearch inputProps={this.getInputCallback} />
        <GifList gifs={this.state.images} />
      </div>
    )
  }
}
