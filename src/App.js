import React from "react";
import SearchBar from "./SearchBar";
import aixos from "axios";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
var randomWords = require("random-words");

class App extends React.Component {
  state = { videos: [], selectedVideo: null, error: null };
  componentDidMount() {
    this.onTermSubmit(randomWords());
  }
  onTermSubmit = (term) => {
    aixos
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 50,
          key: "AIzaSyCW6bubEjLHusvtA8fI-n-QRQDUFZahQPU",
          q: term,
        },
      })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0],
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
        });
      });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="col-md-12">
            <VideoDetail
              video={this.state.selectedVideo}
              error={this.state.error}
            />
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="row-inline col-12">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
