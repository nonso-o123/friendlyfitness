import React from 'react'
import { Form, Input, Button, FormGroup } from 'reactstrap'

export default function VideoItem({ video, handleVideoSelect }) {
    const path = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="vid-item">
            <iframe id={video.id.videoId} type="text/html"
                src={path}
                frameBorder="0"
                title={video.snippet.description} ></iframe>

            <div>
                {/* {video.snippet.title} */}
                <button onClick={() => handleVideoSelect(video)} className="search-btn">Select Video</button>
            </div>

        </div>
    )
}
