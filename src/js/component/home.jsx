import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="container">
				<Jumbotron></Jumbotron>  
				<div className="row">
					<div className="col-sm-6 col-md-3 col-lg-3"><Card></Card></div>
					<div className="col-sm-6 col-md-3 col-lg-3"><Card></Card></div>
					<div className="col-sm-6 col-md-3 col-lg-3"><Card></Card></div>
					<div className="col-sm-6 col-md-3 col-lg-3"><Card></Card></div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Home;
