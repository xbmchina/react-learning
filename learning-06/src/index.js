var React = require('react');
var ReactDOM = require('react-dom');
import BodyIndex from './components/BodyIndex';
import ComponentFooter from './components/ComponentFooter';
import ComponentDetails from './components/ComponentDetails';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Index extends React.Component {
  //组件即将加载
  componentWillMount() {
    //定义你的逻辑即可
    console.log("Index - componentWillMount");
  }
  //组件加载完毕
  componentDidMount() {
    console.log("Index - componentDidMount");
  }

  render() {

		/*
		var component;
		if (用户已登录) {
			component = <ComponentLoginedHeader/>
		}
		else{
			component = <ComponentHeader/>
		}
		*/

    return (
      <Router>
      <div>
        <Route exact path="/" component={BodyIndex}></Route>
        <Route  path="/details/:uniquekey" component={ComponentDetails}></Route>
      </div>
      </Router>
    );
  }
}

ReactDOM.render(<Index/>,document.getElementById('app'))