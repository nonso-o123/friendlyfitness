import React, { Component } from "react";
import fetchVids, { baseParams } from "../axios/fetchVids";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import { withRouter } from 'react-router-dom'

import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ReactPlayer from "react-player";
import "./styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {},
    };
  }
  handleSubmit = async (searchTerm) => {
    // fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&order=date&maxResults=5&key=${KEY}`)
    //     .then(resp => resp.json())
    //     .then((resp) => {
    //         console.log(resp);
    //         this.setState({ videos: resp.items });
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });
    const response = await fetchVids
      .get("/search", {
        params: {
          ...baseParams,
          q: searchTerm,
        },
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      videos: response.data.items,
    });
    console.log(response.data.items);
  };
  handleVideoSelect = (vid) => {
    this.setState({ selectedVideo: vid });
    localStorage.setItem("video", JSON.stringify(vid))
    this.props.history.push(`/connect/${vid.snippet.title}`)

  };
  render() {
    return (
      <div className="container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-6">
              <ReactPlayer height="300px" width="" url="https://www.youtube.com/watch?v=fMUxzrgZvZQ" />
            </div>
            <div className="box-2 col-md-6">
              <div className="col-12">
                <p>
                  Don’t let COVID-19 stop you from achieving your fitness
                  goals. Invite your friends to this virtual workout room
                  and keep making progress together!
                                </p>
              </div>
              <div className="col-12">
                <SearchBar handleSubmit={this.handleSubmit} />
              </div>

              <div className="col-12">
                <VideoList
                  handleVideoSelect={this.handleVideoSelect}
                  videos={this.state.videos}
                />
              </div>


            </div>
          </div>

        </div>


        <h3>Recommendations</h3>
        <div className="carousel-container">
          <Carousel
            addArrowClickHandler={true}
            plugins={[
              "infinite",
              "arrows",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ]}
          >
            <ReactPlayer url="https://www.youtube.com/watch?v=aE4j3KR5m54" />
            <ReactPlayer url="https://www.youtube.com/watch?v=2MoGxae-zyo" />
            <ReactPlayer url="https://www.youtube.com/watch?v=1vRto-2MMZo" />
            <ReactPlayer url="https://www.youtube.com/watch?v=NmCXy7oMsOs" />
          </Carousel>
        </div>
      </div>
    );
  }
}
export default withRouter(Home)