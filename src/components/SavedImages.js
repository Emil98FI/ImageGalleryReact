import React, { Component } from "react"
import Footer from "./Footer"

import Image from "./Image"
import SearchBar from "./SearchBar"

import Navbar from "react-bootstrap/Navbar"

class savedImages extends React.Component {
  constructor() {
    super()

    this.state = {
      isSaved: true,
      savedImages: [],
      empty: true,
    }
  }
  componentDidMount() {
    const pics = localStorage.getItem("pics")
    const imgs = JSON.parse(pics)
    console.log(imgs)
    if (imgs !== null) {
      this.setState({
        empty: false,
      })
      this.setState({
        savedImages: imgs,
      })
    }
  }

  deleteAll() {
    localStorage.clear()
    window.location.reload()
  }

  render() {
    const images = this.state.savedImages.map((pic) => {
      return <Image src={pic} key={pic} alt={pic} />
    })

    return (
      <div className="ImageGallery" style={{ overflow: "hidden" }}>
        <SearchBar
          href="/"
          isSaved={this.state.isSaved}
          deleteAll={this.deleteAll}
        />
        <br />
        <br />
        {images}
        {this.state.savedImages.length == 0 ? <Footer /> : <h1></h1>}
        {this.state.empty === true ? <Footer /> : <h1></h1>}
        {this.state.savedImages.length <= 3 &&
        this.state.savedImages.length > 0 ? (
          <Footer style={{ height: "35%" }} />
        ) : (
          <h1></h1>
        )}
      </div>
    )
  }
}

export default savedImages
