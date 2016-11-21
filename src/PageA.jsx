import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, Link, hashHistory} from 'react-router';
import PageB from './PageB';

export default class PageA extends React.Component{

	constructor(props) {
    super(props);
	this.state = {isSaved:false};
	}

	handleSubmit(props,e) {
        //alert(`UserName:${this.refs.userName.value}, Password:${this.refs.password.value}`);
        e.preventDefault();
        // hashHistory.push('/PageB');
		ReactDOM.render(<PageB name={props.name}/>,document.getElementById('main'));
    }

	/* direct go */
	/*render() {
		return (
			<div>
				<div>Now in page: {this.props.name||"A&&"}<br/><br/>
					<a className="button" onClick={this.handleSubmit.bind(this,{name:"B!"})}> Go to Page B</a>
				</div>
			</div>
			);
	}*/

	/* using route like left-bar.jsx done */
	render() {
		return (
			<div>
				<div>Now in page: {this.props.name||"A for route"}<br/><br/>
					<li><Link to="/PageB"> Route to Page B</Link></li>
				</div>
			</div>
			);
	}

	componentDidMount() {
      this.props.router.setRouteLeaveHook(
        this.props.route, 
        this.routerWillLeave.bind(this)
      )
    }

	routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
	  
      if (!this.state.isSaved){
        return '确认要离开？';
	  }

	  // watch ever the page have changes and if submitted.
	  this.state.isSaved=true;
    }
};

module.exports = withRouter(PageA);