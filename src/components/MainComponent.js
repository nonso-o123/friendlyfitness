import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "./Header";
import Home from "./HomeComponent";
import VideoChat from './videochat/VideoChat';
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Flex } from "./Flex";
import "./styles.css";
import "./videochat/videochat.css"
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div className="main-container">
            <Header />
            <div className="container-1">
                <div className="box-1">
                    <ReactPlayer url="https://www.youtube.com/watch?v=fMUxzrgZvZQ" />
                </div>
                <div className="box-2">
                    <p>
                        Don’t let COVID-19 stop you from achieving your fitness
                        goals. Invite your friends to this virtual workout room
                        and keep making progress together!
                    </p>
                    <Switch>
                        <Route
                            exact={true}
                            path="/"
                            component={() => <Home {...this.props} />}
                        />
                    </Switch>
                </div>
            </div>
            <h3>Recommendations</h3>
            <div className="carousel-container">
                <Carousel
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
            <div className="videochat">
                <VideoChat />
            </div>
        </div>
    );
  }
}
