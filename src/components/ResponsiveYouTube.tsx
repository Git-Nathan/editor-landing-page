// components/ResponsiveYouTube.tsx
import React from 'react'

interface ResponsiveYouTubeProps {
  videoId: string
  autoplay?: boolean
  controls?: boolean
}

const ResponsiveYouTube: React.FC<ResponsiveYouTubeProps> = ({
  videoId,
  autoplay = false,
  controls = true,
}) => {
  return (
    <div className='relative h-0 overflow-hidden rounded-2xl pb-[56.25%] shadow-lg'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${
          autoplay ? 1 : 0
        }&controls=${controls ? 1 : 0}`}
        title='YouTube Video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  )
}

export default ResponsiveYouTube
