import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';

const CourseOutline = (props) => {

	const [courseOutline, setCourseOutline] = useState([]);
	const [ready, setReady] = useState(false);

	useEffect(() => {

		axios({
			method:"GET",
			withCredentials: true,
			url: "https://chika-api.herokuapp.com/api/getCourseOutline",
		}).then((res) => {
			console.log(res.data.courseOutline)
			setCourseOutline(res.data.courseOutline);
			setReady(true);
		});

	}, []);

	return (
		<>
			<div className="row d-flex justify-content-center">

				{
					ready ?
					courseOutline.map((value, index) => {
						return (
					        <div className="col-md-3 course_cols" key={index}>
					        	<Link to={`course/${value.courseLink}`}>
									<div className="card course_card">
										<img 
											src=
											{`https://chika-api.herokuapp.com/static/img/${value.courseImg}`}
											className="card-img-top course_img"
											alt="230032"
										/>
										<div className="card-body">
											<p 
												className="course_title">
												{value.courseName}
					              			</p>
										</div>
									</div>
								</Link>
					        </div>
						)
					})
			        : <Loader />
				}

			</div>
			<p className="text-right"><Link to="blog">View All Blog Post</Link></p>
		</>
	)
}

export default CourseOutline;