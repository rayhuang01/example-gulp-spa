import React from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import PageA from './PageA';

export default class PageB extends React.Component{

	constructor(props) {
    super(props);
	// this.props.name="B%%"
	}

	handleSubmit(props,e) {
        //alert(`UserName:${this.refs.userName.value}, Password:${this.refs.password.value}`);
        e.preventDefault();
        // hashHistory.push('/PageA');
		ReactDOM.render(<PageA name={props.name}/>,document.getElementById('main'));
    }

	/* direct go */
	render() {
		return (
			<div>
				<div>Now in page: {this.props.name}<br/><br/>
					<a className="button" onClick={this.handleSubmit.bind(this, {name:"A!"})}> Go to Page A</a>
				</div>
			</div>
			);
	}
};