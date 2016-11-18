import React from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';

/* using router */
export default class LeftBar extends React.Component{
	render() {
		return (
			<div className="slide-bar">
				<ul>
					<li><Link to="/PageA"> Route to Page A</Link></li>
					<li><Link to="/PageB"> Route to Page B</Link></li>
				</ul>
			</div>
		);
	}
};