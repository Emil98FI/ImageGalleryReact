import React, { Component } from "react"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Navbar from "react-bootstrap/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

class SearchBar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchValue: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div className="up">
        <Form onSubmit={this.props.onSubmit}>
          <Navbar
            style={{ display: "flex", width: " 200%" }}
            bg="dark"
            variant="dark"
          >
            {this.props.isSaved === true ? (
              <Navbar.Brand
                href={this.props.href}
                bg="light"
                onClick={this.props.onClick}
              >
                Show Home
              </Navbar.Brand>
            ) : (
              <Navbar.Brand href={this.props.href} onClick={this.props.onClick}>
                Show My Saved Gallery
              </Navbar.Brand>
            )}
          </Navbar>

          <br />
          {this.props.isSaved === true ? (
            <h1>Saved Images</h1>
          ) : (
            <Form.Group controlId={this.props.controlId}>
              <Form.Control
                name={this.props.searchValue}
                value={this.props.searchValue}
                onChange={this.props.onChange}
                placeholder="Search"
              />
            </Form.Group>
          )}
          {this.props.isSaved === true ? (
            <Button variant="danger" onClick={this.props.deleteAll}>
              Delete All
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Search
            </Button>
          )}
        </Form>
      </div>
    )
  }
}

export default SearchBar
