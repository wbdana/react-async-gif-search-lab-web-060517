import React from 'react'

class GifList extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        {this.props.gifs.map( (gif, index) => {
          return <iframe src={`https://giphy.com/embed/${gif.id}`} key={index} />
        })}
      </div>
    )
  }
}

export default GifList

// <iframe src="https://giphy.com/embed/VKLq7tgUIoPrG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dump-ten-VKLq7tgUIoPrG">via GIPHY</a></p>
