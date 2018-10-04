import React from "react"

class Channels extends React.Component {

    render() {



      return (
        <div className="container">
          <div className="channel" style={{ backgroundColor: `#${this.props.color}` }}>
            <img src={this.props.image} className="channel-img"/>
              <div className="channel-info">
                <h2>{this.props.name}</h2>
                <audio className="audio" controls>
              <source src={this.props.audio} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>
    )
  }
}










export default Channels
