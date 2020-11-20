import React from 'react';
import MainImg from '../assets/img_props/bgremoved.png';

const Header = () => {
	return (
      <div className="row first_row">

        <div className="col-md-4 main_img_col">
          <img src={MainImg} className="main_img" alt="main-img" />
        </div>

        <div className="col-md-7 main_text_col">
          <h4>Keep Up With Me</h4>
          <h5>On My Programming Journey</h5>
          <br />
          <br />
          <p>
            <span>It's fun learning Programming 😜</span>
          </p>
        </div>
      </div>
	)
}

export default Header;