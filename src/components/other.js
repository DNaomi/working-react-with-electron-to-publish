import React from "react"
import {Link} from "react-router-dom"


function other() {
  return (
    <div className="App">
      <div>
        <h1 className="App-header">Other page</h1>
        <h2 className="Other-header">Hello world</h2>
        <Link to="/">Next</Link>
      </div>
    </div>
  );
}

export default other;
