import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';

const Blog = (props) => {

	const [allCourses, setAllCourses] = useState([]);
	const [ready, setReady] = useState(false);

	useEffect(() => {

		axios({
			method:"GET",
			withCredentials: true,
			url: "http://localhost:5000/api/getAllCourse",
		}).then((res) => {
			setAllCourses(res.data.allCourse);
			setReady(true);
		});

	}, []);

	return (
		<>
			<br />
			<br />
			<div className="row d-flex justify-content-center">

				{
					ready ?
					allCourses.map((value, index) => {
						return (
					        <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6 course_cols" 
					        	key={index}>
					        	<Link to={`blog/${value.courseLink}`}>
									<div className="card course_card">
										<img 
											src=
											{`http://localhost:5000/static/img/${value.courseImg}`}
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
		</>
	)
}

export default Blog;