import React, { useState, useEffect } from 'react'
import VideoChat from './videochat/VideoChat';

export const Connect = () => {
    const [video, setVideo] = useState({ id: {}, snippet: {} })

    useEffect(() => {
        const vid = JSON.parse(localStorage.getItem('video'))
        setVideo(() => {
            return ({
                ...vid,
                id: { ...vid.id },
                snippet: { ...vid.snippet }
            })
        })

    }, [])
    const { ...id } = video.id
    const { ...snippet } = video.snippet

    const path = `https://www.youtube.com/embed/${id.videoId}`

    return (
        <div>
            <div className="vid-item">
                <iframe className="selected-vid" id={id.videoId}
                    src={path}
                    frameBorder="0"
                    title={snippet.description} ></iframe>
            </div>
            <div className="videochat">
                <VideoChat />
            </div>
        </div>
    )
}
