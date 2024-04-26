import React from 'react';
import imgAvatar1 from '../photo/photo1.jpg'; // Import the first image file
import imgAvatar2 from '../photo/photo2.jpg'; // Import the second image file
import imgAvatar3 from '../photo/photo3.jpg'; // Import the third image file
import '../css/OpacityBox.css'; // Import CSS file for OpacityBox styles

class OpacityBox extends React.Component {
  render() {
    return (
      <div className="opacity-box-container">
        <div className="opacity-box">
          <img src={imgAvatar1} alt="Avatar 1" className="image" />
          <div className="middle">
            <div className="text">Lorem Ipsum is simply dummy <br/>
            text of the printing and typesetting industry. <br/>
            Lorem Ipsum has been the industry's standard</div>
          </div>
        </div>

        <div className="opacity-box">
          <img src={imgAvatar2} alt="Avatar 2" className="image" />
          <div className="middle">
            <div className="text">Lorem Ipsum is simply dummy <br/>
            text of the printing and typesetting industry. <br/>
            Lorem Ipsum has been the industry's standard</div>
          </div>
        </div>

        <div className="opacity-box">
          <img src={imgAvatar3} alt="Avatar 3" className="image" />
          <div className="middle">
            <div className="text">Lorem Ipsum is simply dummy <br/>
            text of the printing and typesetting industry. <br/>
            Lorem Ipsum has been the industry's standard</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OpacityBox;
