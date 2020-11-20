import React, {useState} from 'react';
import axios from 'axios';

const AddCourse = () => {

	const [courseName, setCourseName] = useState("");
	const [courseLink, setCourseLink] = useState("");
	const [courseImgUrl, setCourseImgUrl] = useState([]);
	const [courseImgObj, setCourseImgObj] = useState([]);
	const [showCol, setShowCol] = useState(false);

	const getCourseImg = (event) => {
	    setShowCol(true);
	    setCourseImgObj(event.target.files[0]);
	    const blobFile = URL.createObjectURL(event.target.files[0]);
	    setCourseImgUrl(blobFile);
	}

	const addCourse = (e) => {
		e.preventDefault();

		var form_data = new FormData();
		form_data.append("files", courseImgObj);
		form_data.append("courseName", courseName);
		form_data.append("courseLink", courseLink);

		axios({
			method:"POST",
			data: form_data,
			dataType: 'json',
			contentType: false,
			processData: false,
			withCredentials: true,
			url: "https://chika-api.herokuapp.com/api/addCourseOutline",
		}).then((res) => {
			console.log(res.data);
		});

	}


	return (
		<>
			<br />
			<div className="row">
				<div className="col-md-7">
					<div className="card addCourseCard">
						<div className="card-body">
							<form onSubmit={addCourse}>
								<div className="form-group">
									<input 
										type="text" 
										className="form-control couseAttrInput" 
										placeholder="Course Name"
										onChange={e => setCourseName(e.target.value)}
									/>
								</div>

								<div className="form-group">
									<input 
										type="text" 
										className="form-control couseAttrInput" 
										placeholder="Course Link"
										onChange={e => setCourseLink(e.target.value)}
									/>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<input 
												type="file"
												className="course_img"
												onChange={getCourseImg}
												hidden={true}
												id="course_img"
											/>
											<label 
												htmlFor="course_img" 
												className="course_img_btn btn-block"
											>Add Course Image</label>
										</div>
									</div>

									{
										showCol ?
										<div className="col-md-6">
											{
												courseImgUrl ?
													<img 
														src={courseImgUrl} 
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
								>Add</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddCourse;