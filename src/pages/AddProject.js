import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {

	const [projectTitle, setProjectTitle] = useState("");
	const [projectLink, setProjectLink] = useState("");
	const [projectDescription, setProjectDescription] = useState("");

	const [showCol, setShowCol] = useState(false);
	const [projectImgUrl, setProjectImgUrl] = useState([]);
	const [projectImgObj, setProjectImgObj] = useState([]);

	const getProjectImg = (event) => {
	    setShowCol(true);
	    setProjectImgObj(event.target.files[0]);
	    const blobFile = URL.createObjectURL(event.target.files[0]);
	    setProjectImgUrl(blobFile);
	}

	const handleForm = (e) => {
		e.preventDefault();

		var form_data = new FormData();
		form_data.append("files", projectImgObj);
		form_data.append("projectTitle", projectTitle);
		form_data.append("projectLink", projectLink);
		form_data.append("projectDescription", projectDescription);

		axios({
			method:"POST",
			data: form_data,
			dataType: 'json',
			contentType: false,
			processData: false,
			withCredentials: true,
			url: "https://chika-api.herokuapp.com/api/addProject",
		}).then((res) => {
			console.log(res.data);
		});

	}

	return (
		<>
			<br />
			<div className="row">
				<div className="col-md-7">
					<div className="card addProjectCard">
						<div className='card-body'>
							<form onSubmit={handleForm}>
								<div className="form-group">
									<input 
										type="text" 
										className="form-control couseAttrInput" 
										placeholder="Project Title"
										value={projectTitle}
										onChange={e => setProjectTitle(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<input 
										type="text" 
										className="form-control couseAttrInput" 
										placeholder="Project Link"
										onChange={e => setProjectLink(e.target.value)}
										value={projectLink}
									/>
								</div>

								<div className="form-group">
									<textarea 
										type="text" 
										className="form-control couseAttrInput" 
										placeholder="Project Description"
										style={{resize: "none"}}
										rows="3"
										value={projectDescription}
										onChange={e => setProjectDescription(e.target.value)}
									/>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input 
												type="file"
												className="course_img"
												onChange={getProjectImg}
												hidden={true}
												id="course_img"
											/>
											<label 
												htmlFor="course_img" 
												className="course_img_btn btn-block"
											>Add Project Image</label>
										</div>
									</div>

									{
										showCol ?
										<div className="col-md-6">
											{
												projectImgUrl ?
													<img 
														src={projectImgUrl} 
														alt="ph_to" 
														className="img-fluid prevCourseImg" 
													/>
												: ''
											}
										</div>
										: ''
									}

								</div>

								<br/>
								<button 
									type="submit" 
									className="addCourseBtn float-right"
								>Add Project</button>

							</form>
						</div>
					</div>
					<br />
				</div>
			</div>
		</>
	)
}

export default AddProject;