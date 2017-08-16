import React from 'react'

export default class GifSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    this.updateInput = this.updateInput.bind(this)
    this.passInputUp = this.passInputUp.bind(this)
  }

  updateInput(event) {
    this.setState({
      input: event.target.value
    })
    console.log(event.target.value)
  }

  passInputUp(event) {
    event.preventDefault()
    this.props.inputProps(this.state.input)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.passInputUp}>
          <input type="text" onChange={this.updateInput} />
          <input type="submit" value="Grab some gifs!" />
        </form>
      </div>
    )
  }
}
