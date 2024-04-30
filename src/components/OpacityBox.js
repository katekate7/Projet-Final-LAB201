import React from 'react';
import imgAvatar1 from '../photo/romain.png'; // Import the first image file
import imgAvatar2 from '../photo/pauline.png'; // Import the second image file
import imgAvatar3 from '../photo/maxime.png'; // Import the third image file
import '../css/OpacityBox.css'; // Import CSS file for OpacityBox styles

class OpacityBox extends React.Component {
  render() {
    return (
      <div className="opacity-box-container">
        <div className="opacity-box">
          <img src={imgAvatar1} alt="Avatar 1" className="image" />
          <div className="middle">
            <div className="text">Romain <br/>
            Cannone <br/>
            _______<br/>
            Épée</div>
          </div>
        </div>

        <div className="opacity-box">
          <img src={imgAvatar2} alt="Avatar 2" className="image" />
          <div className="middle">
            <div className="text">Pauline <br/>
            Ranvier <br/>
            _______<br/>
            Fleuret</div>
          </div>
        </div>

        <div className="opacity-box">
          <img src={imgAvatar3} alt="Avatar 3" className="image" />
          <div className="middle">
            <div className="text">Maxime<br/>
            Pianfetti<br/>
            _______<br/>
            Sabre</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpacityBox;
