import React from 'react';
import Frame from '../assets/img_props/Frame 1.svg';

const PortfolioStacks = () => {
	return (
		<>
	      <div className="row d-flex justify-content-center">

	        <div className="col-md-11 my_stacks_div">
	          <div className="card frame_card" style={{backgroundColor: "transparent"}}>
	            <img src={Frame} className="card-img-top stack_img" alt="frame" />
	          </div>
	        </div>

	      </div>

	      <br />
	      <br />
	      <br />
	      <br />
	    </>
	)
}

export default PortfolioStacks;