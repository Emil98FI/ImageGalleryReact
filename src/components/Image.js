import React from "react"
class Image extends React.Component {
  constructor(props) {
    super(props)

    this.state = { spans: 0, hovered: false }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight
    const spans = Math.ceil(height / 200)
    this.setState({ spans: spans })
  }

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {this.props.isSaved === false ? (
          <img
            ref={this.imageRef}
            src={this.props.src}
            alt={this.props.description}
            onClick={this.props.onClick}
            title="Click To Save"
            onMouseOut={() => this.setState({ hovered: false })}
            onMouseOver={() => this.setState({ hovered: true })}
            style={{
              transform: `${
                this.state.hovered ? "scale(1.1,1.1)" : "scale(1.0,1.0)"
              }`,
            }}
          />
        ) : (
          <img
            ref={this.imageRef}
            src={this.props.src}
            alt={this.props.description}
            onMouseOut={() => this.setState({ hovered: false })}
            onMouseOver={() => this.setState({ hovered: true })}
            style={{
              transform: `${
                this.state.hovered ? "scale(1.1,1.1)" : "scale(1.0,1.0)"
              }`,
            }}
          />
        )}
      </div>
    )
  }
}

export default Image
