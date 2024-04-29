import React, { useState } from 'react';
import '../css/Music.css';
import MusicFile from '../photo/music.mp3'; // Adjust the path if needed

function MusicComponent() {
    const [audio] = useState(new Audio(MusicFile));
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => {
                console.error('Autoplay was prevented:', error);
                // Handle autoplay prevention here, e.g., show play button
            });
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            {/* Your other content goes here */}
            <button className="MusicButton" onClick={togglePlay}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}

export default MusicComponent;
