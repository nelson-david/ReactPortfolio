import React, { useState } from 'react';
import Me from '../assets/img_props/me.jpg';

import PortfolioStacks from '../components/PortfolioStacks';
import PortfolioProjects from '../components/PortfolioProjects';

const PortfolioHeader = () => {

	const [ showStacks, setShowStacks ] = useState(true);
	const [ showProjects, setShowProjects ] = useState(false);
	const [ showAbout, setShowAbout ] = useState(false);

	const toggleStack = () => {
		setShowProjects(false);
		setShowAbout(false);
		setShowStacks(!showStacks);
	}
	const toggleProject = () => {
		setShowStacks(false);
		setShowAbout(false);
		setShowProjects(!showProjects);
	}
	const toggleAbout = () => {
		setShowStacks(false);
		setShowProjects(false);
		setShowAbout(!showAbout);
	}

	return (
		<>
	      <br />
	      <div className="row first_row_two">

	        <div className="col-md-3 david_img_col">
	          <div className="card" style={{width: "16rem !important"}}>
	            <img src={Me} className="card-img-top david_main_img" alt="me" />
	          </div>
	        </div>

	        <div className="col-md-9 my_id_text_col">
	          <h4>I Am David Nelson</h4>
	          <br />
	          <p>
	            <span>Full Stack Developer</span>
	            <br />
	            <span>From Nigeria.</span>
	          </p>

	          <div className="row d-flex justify-content-start">
	            <div className="col-md-11 stacks_col">
	              <div className="card stacks_card">
	                <div className="card-body">
	                	<button 
	                		className="float-left stack_btn" 
	                		onClick={toggleStack}
	                	>Stacks</button>

						<button 
							className="btn_center stack_btn"
							onClick={toggleProject}
						>Projects</button>

						<button 
							className="float-right stack_btn"
							onClick={toggleAbout}
						>About</button>
	                </div>
	              </div>
	            </div>
	          </div>

	        </div>
	      </div>
	      <br />
			{
				showStacks ?
				<PortfolioStacks />
				: ''
			}
			{
				showProjects ?
				<PortfolioProjects />
				: ''
			}
	    </>
	)
}

export default PortfolioHeader;