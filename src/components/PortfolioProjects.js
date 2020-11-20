import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PortfolioProjects = () => {

	const [allProject, setAllProject] = useState([]);

	useEffect(() => {

		axios({
			method:"GET",
			withCredentials: true,
			url: "https://chika-api.herokuapp.com/api/getAllProject",
		}).then((res) => {
			setAllProject(res.data.allProject);
		});

	}, []);

	return (
		<>
			<div className="row d-flex justify-content-center portfolio_project_row">
				{
					allProject ?
					allProject.map((value, index) => {
						return (
							<div className="col-md-6 my_stacks_div" oncontextmenu="false">
								<div className="card portfolio_project_card">
					            	<div className="row">
					            		<div className="col-md-6 upper_project_col">
					            			<div className="project_description">
					            				<span>{value.projectTitle}</span>
					            			</div>
					            			<img 
					            				src=
					            				{`https://chika-api.herokuapp.com/static/img/${value.projectImg}`}
					            				alt="project"
					            				className=
					            				"card-img-top img-fluid w-100 project_img" />
					            		</div>
					            		<div className="col-md-6 project_desc_col">
					            			<div className="project_stacks">
					            				<span>Stacks</span>
					            				<p>
					            					<a href="/app">Python </a>
					            					<a href="/app">Flask </a> 
					            					<a href="/app">Javascript </a> 
					            					<a href="/app">Jquery </a> 
					            					<a href="/app">Bootstrap</a>
					            				</p>
					            			</div>
					            			<hr 
					            				style={{background: "aliceblue", marginTop: "-9px", 
					            				marginBottom: "2px"}} 
					            			/>
					            			<p className="project_link">Link: 
					            				<a href="/app"> github - emergency kit</a>
					            				<br/>
					            				<span className="open_project_desc">
					            					Project Description
					            				</span>
					            			</p>
					            		</div>
					            	</div>
								</div>
							</div>
						)
					})
					: ''
				}

			</div>
			<br />
	    </>
	)
}

export default PortfolioProjects;