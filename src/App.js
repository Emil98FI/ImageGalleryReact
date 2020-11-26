import "./App.css"
import React from "react"
import savedImages from "./components/SavedImages"
import Footer from "./components/Footer"
import ImageGallery from "./components/ImageGallery"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="main">
        <Switch>
          <Route path="/" exact component={ImageGallery} />
          <Route path="/saved" component={savedImages} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
