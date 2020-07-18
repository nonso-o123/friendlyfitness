import React from 'react'

export default function VideoItem({ video, handleVideoSelect }) {
    const path = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div onClick={() => handleVideoSelect(video)}>
            <iframe id={video.id.videoId} type="text/html"
                src={path}
                frameBorder="0"
                title={video.snippet.description} ></iframe>

            <div>{video.snippet.title}</div>

        </div>
    )
}
