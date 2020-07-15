import React from 'react'

export default function VideoItem({ video, handleVideoSelect }) {

    return (
        <div onClick={() => handleVideoSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description} />
            <div>{video.snippet.title}</div>

        </div>
    )
}
