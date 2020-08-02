import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({ videos, handleVideoSelect }) {
    const renderVideos = videos.map(video => {
        return <VideoItem key={video.id.videoId}
            handleVideoSelect={handleVideoSelect}
            video={video} />
    })
    return (
        <div className="vid-list">
            {renderVideos}
        </div>
    )
}
