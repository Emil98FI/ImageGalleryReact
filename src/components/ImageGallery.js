import React from "react"
import Image from "./Image"
import SearchBar from "./SearchBar"
import MButton from "./Button"

import "bootstrap/dist/css/bootstrap.min.css"
class ImageGallery extends React.Component {
  constructor() {
    super()

    this.state = {
      auth: "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      Images: [],
      saveImages: [],
      SearchImages: [],
      picture: "",
      input: "",
      page: 2,
      Spage: 1,
      isSearch: true,
      isSaved: false,
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const pics = localStorage.getItem("pics")
    const imgs = JSON.parse(pics)
    console.log(imgs)

    if (imgs !== null) {
      this.setState({
        saveImages: imgs,
      })
    }
    this.setState({
      isSearch: false,
    })
    fetch("https://api.pexels.com/v1/curated?per_page=50", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          Images: result.photos,
        })
      })
  }

  componentDidUpdate() {
    localStorage.setItem("pics", JSON.stringify(this.state.saveImages))
  }

  onSearchSubmit(event, input) {
    event.preventDefault()

    input = this.state.input

    this.setState({
      isSearch: true,
    })

    this.setState((prevState) => ({
      page: prevState.Spage + 1,
    }))

    const Page = this.state.Spage

    fetch(
      `https://api.pexels.com/v1/search?page=${Page}&query=${input}&per_page=50`,
      {
        method: "GET",
        params: { query: input },
        headers: {
          Accept: "application/json",
          Authorization:
            "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
        },
      }
    )
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          Images: result.photos,
        })
      })
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      input: event.target.value,
    })
    console.log(this.state.input)
  }
  ///////////
  handleClick = (event) => {
    const saveimage = event.target.src
    this.setState((prevState) => ({
      saveImages: [...prevState.saveImages, saveimage],
    }))
    alert("Saved! :)")
  }
  //////////
  loadMore = () => {
    console.log("ClicK")
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))

    const Page = this.state.page
    console.log(this.state.page)
    fetch(`https://api.pexels.com/v1/curated?page=${Page}&per_page=50`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "563492ad6f91700001000001ac55b9dfe4c9429d8c1084dcf93656f8",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          Images: result.photos,
        })
      })
  }

  render() {
    console.log(this.props)
    const images = this.state.Images.map((pic) => {
      return (
        <Image
          src={pic.src.large}
          key={pic.id}
          alt={pic.url}
          desc={pic.height}
          onClick={this.handleClick}
          isSaved={this.state.isSaved}
        />
      )
    })

    return (
      <div className="ImageGallery">
        <SearchBar
          href="saved"
          pics={this.state.saveImages}
          onSubmit={this.onSearchSubmit}
          name="input"
          value={this.state.input}
          onChange={this.handleChange}
          placeholder="Search"
        />

        <br />
        <br />
        {images}

        <MButton
          onClick={this.loadMore}
          searchload={this.onSearchSubmit}
          isSearch={this.state.isSearch}
        />
      </div>
    )
  }
}

export default ImageGallery
