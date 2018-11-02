import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onTermChange(term);
  };

  render() {
    return (
      <div className="bg-dark py-3 mb-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <a href="/" className="navbar-brand text-warning">
                YouTube Searcher
              </a>
            </div>
            <div className="col-md-4">
              <input
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                placeholder="Search here..."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
