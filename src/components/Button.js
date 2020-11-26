import React, { Component } from "react"
import ImageGallery from "./ImageGallery"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

class MButton extends React.Component {
  constructor() {
    super()

    this.state = {}
  }
  render() {
    return (
      <div className="bb">
        {this.props.isSearch === false ? (
          <Button
            variant="primary"
            size="lg"
            block
            onClick={this.props.onClick}
          >
            Load More Images
          </Button>
        ) : (
          <Button
            variant="primary"
            size="lg"
            block
            onClick={this.props.searchload}
          >
            Load More Images
          </Button>
        )}
      </div>
    )
  }
}

export default MButton
