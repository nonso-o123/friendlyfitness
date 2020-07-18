import React, { Component } from 'react'
import fetchVids, { baseParams } from '../axios/fetchVids'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
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
        const response = await fetchVids.get('/search',
            {
                params: {
                    ...baseParams,
                    q: searchTerm
                }
            })
            .catch(error => {
                console.log(error)
            });
        this.setState({
            videos: response.data.items
        })
        console.log(response.data.items)
    }
    handleVideoSelect = vid => {
        this.setState({ selectedVideo: vid })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <SearchBar handleSubmit={this.handleSubmit} />
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            </div>
        )
    }
}






