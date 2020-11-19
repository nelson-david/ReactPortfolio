import React from 'react';

const BlogPost = () => {
	return (
		<>
			<br />
			<div className="row d-flex justify-content-center">
				<div className="col-md-3 single_course_col">
					<div className="card course_syllabus_card">
						<div className="card-body">
							<button 
								className="btn-block syllabus_btn active_btn">
									Introduction To Python
							</button>
							<button className="btn-block syllabus_btn">Installing Python</button>
							<button className="btn-block syllabus_btn">Printing</button>
							<button className="btn-block syllabus_btn">Variables</button>
							<button className="btn-block syllabus_btn">Getting User Input</button>
							<button className="btn-block syllabus_btn">Loops</button>
							<button className="btn-block syllabus_btn">Range Function</button>

							<button className="btn-block syllabus_btn">Math Operators</button>
							<button className="btn-block syllabus_btn">Conditional Operators</button>
							<button className="btn-block syllabus_btn">Elif</button>

							<button className="btn-block syllabus_btn">Comments</button>
							<button className="btn-block syllabus_btn">Swapping Variables</button>
							<button className="btn-block syllabus_btn">Summing</button>

							<button className="btn-block syllabus_btn">Counting</button>
							<button className="btn-block syllabus_btn">The *in* Operator</button>
							<button className="btn-block syllabus_btn">
								Concatenation and repetition</button>

							<button className="btn-block syllabus_btn">Indexing</button>
							<button className="btn-block syllabus_btn">Slices</button>
							<button className="btn-block syllabus_btn">More On Strings</button>

							<button className="btn-block syllabus_btn">Lists</button>
							<button className="btn-block syllabus_btn">While Loops</button>
							<button className="btn-block syllabus_btn">Short Circuiting</button>

							<button className="btn-block syllabus_btn">Nested Loops</button>
							<button className="btn-block syllabus_btn">Continuation and pass</button>
							<button className="btn-block syllabus_btn">Functions</button>

							<button className="btn-block syllabus_btn">Project</button>
							<button className="btn-block syllabus_btn">Conclusion</button>
							<br />

						</div>
					</div>
				</div>

				<div className="col-md-9 single_course_col">
					<div className="card course_content_card">
						<div className="card-body">
						</div>
					</div>
				</div>

			</div>
			<br />
		</>
	)
}

export default BlogPost;