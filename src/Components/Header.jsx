import React from 'react';
import '../Components/Counter.css';
import { Link } from 'react-router-dom';


function Header(){
	return(
<div className="main-header">
	<ul>

	<Link to="/">
		<li>Home</li>
	</Link>

	<Link to="/about">
		<li>About</li>
	</Link>

	<Link to="/counter">
		<li>Counter</li>
	</Link>

	<Link to="/contact">
		<li>Contact Us</li>
	</Link>

	</ul>
</div>
		);
}

export default Header;
