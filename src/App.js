import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import AddCourse from './pages/AddCourse';
import AddProject from './pages/AddProject';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
	return (
		<Router>
			<>
				<Navbar />
				<Switch>
					<div className="container">
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/addcourse">
							<AddCourse />
						</Route>
						<Route exact path="/addproject">
							<AddProject />
						</Route>
						<Route exact path="/portfolio">
							<Portfolio />
						</Route>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route exact path="/blog/:post_title">
							<BlogPost />
						</Route>
					</div>
				</Switch>
				<Footer />
			</>
		</Router>
	);
}

export default App;