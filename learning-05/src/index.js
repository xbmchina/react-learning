var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import BodyIndex from './components/BodyIndex';

class Index extends React.Component {
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
      <div>
        <ComponentHeader />
        <BodyIndex />
        <ComponentFooter />
      </div>
    );
  }
}


ReactDOM.render(
  <Index />, document.getElementById('app'));
