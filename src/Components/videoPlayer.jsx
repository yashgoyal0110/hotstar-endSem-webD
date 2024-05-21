import React from 'react';

const VideoPlayer = ({title, keywords ,videoUrl,dis, onClose }) => {
  return (
    <div className="relative bg-black text-white">
        <video src={videoUrl} alt={title} className="w-full h-dvh object-cover" autoPlay loop muted></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between p-8">
            <div className="flex justify-between items-start">
                <div className="text-lg bg-opacity-75 bg-zinc-800 p-2 rounded">{title}(Hindi)</div>
            </div>
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-sm opacity-75">{keywords}</p>
                <p className="mt-4">{dis}</p>
            </div>
        </div>
    </div>
  )
};

export default VideoPlayer;

