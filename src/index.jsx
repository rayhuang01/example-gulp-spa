import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, withRouter, Link, IndexLink, hashHistory, browserHistory} from 'react-router';
import PageA from './PageA';
import PageB from './PageB';
import LeftBar from './left-bar';
import Timer from './timer';

class HelloWorld extends React.Component{
	render() {
		return (
			<div>
				<LeftBar/>
				<Timer/>
				<div id="wrapper">
					{this.props.children||<PageB name="B$$$"/>}
				</div>
			</div>
		);
	}
};

const requireAuth = (nextState, replace) => {
    if (!auth.isAdmin()) {
        // Redirect to Home page if not an Admin
        replace({ pathname: '/' })
    }
}

// Reference: http://cncc.bingj.com/cache.aspx?q=react+route+component&d=4614901036286434&mkt=zh-CN&setlang=zh-CN&w=IX27G5dBz_QynQx5w5lfCJoG841RMVod
// Initial page:
// 1, <IndexRoute component={PageA}/>;
// 2, {this.props.children||<PageB name="B$$$"/>}
// Note: see difference bettween browserHistory and hashHistory
let routes=<Route path="/" component={HelloWorld}>
			<Route path="/pagea" component={PageA}></Route>
			<Route path="/pageb" component={PageB}></Route>
		</Route>;
ReactDOM.render( 
	<Router history={hashHistory} routes={routes}></Router>
	, document.getElementById('root')
);