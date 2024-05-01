import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import video1 from "../photo/Video.mp4";

class Video extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef(); // Create a reference to the video element
    this.state = {
      isPlaying: false // Initialize state for play/pause functionality
    };
  }

    // Function to handle play/pause toggle
  handlePlayPause = () => {
    const video = this.videoRef.current; // Get reference to the video element
    if (this.state.isPlaying) {
      video.pause(); // Pause the video if it's playing
    } else {
      video.play();  // Play the video if it's paused
    }
    this.setState({ isPlaying: !this.state.isPlaying }); // Toggle play/pause state
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <video ref={this.videoRef} src={video1} style={{
          width:'100vh',
          height:'50vh',
          margin: '0%'
        }} />
        <button
          onClick={this.handlePlayPause}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            borderRadius: '50%', // Make the button circular
            padding: '15px', // Add padding to ensure the button remains circular
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional: add background color to make the button more visible
            border: 'none' // Optional: remove border for a cleaner look
          }}
        >
          <FontAwesomeIcon
            icon={this.state.isPlaying ? faPause : faPlay}
            style={{ fontSize: '24px' }} // Adjust the font size of the icon
          />
        </button>
      </div>
    );
  }
}

export default Video;

