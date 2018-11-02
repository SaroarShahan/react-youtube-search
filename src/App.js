import React, { Component } from "react";
import YTSearch from "youtube-search-lib";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";
import Footer from "./components/Footer";

const API_KEY = "AIzaSyBa6SPdYEgnVliL6rB5FmoIS2263qB8aCw";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSearch("reactjs");
  }

  onSearch = term => {
    YTSearch({ key: API_KEY, term: term, maxResults: 5 }, videos =>
      this.setState({ videos, selectedVideo: videos[0] })
    );

    console.log(this.state.videos);
  };

  onVideoChange = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.onSearch} />
        <div className="container">
          <div className="row">
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.onVideoChange}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
