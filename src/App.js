import React from "react";
import SearchBar from "./SearchBar";
import aixos from "axios";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("Short animated movies");
  }
  onTermSubmit = (term) => {
    aixos
      .get("https://youtube.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 50,
          key: "AIzaSyAjAYe4qjdEr59tLAn_kTtKcx6rzjiOQMc",
          q: term,
        },
      })
      .then((res) => {
        this.setState({
          videos: res.data.items,
          selectedVideo: res.data.items[0],
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
            <VideoDetail video={this.state.selectedVideo} />
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
