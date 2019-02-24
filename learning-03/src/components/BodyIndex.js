import React from 'react';
import ContentIndex from './ContentIndex';

const defaultProps = {
	username: '这是一个默认的用户名'
};

export default class BodyIndex extends React.Component {
	constructor() {
		super(); //调用基类的所有的初始化方法
		this.state = {
			username: "kathyrn",
			age: 20
		}; //初始化赋值
    }
    
    changeUserInfo(age) {
        this.setState({age: age});
        
        //获取原生dom第一种方式
		// var mySubmitBotton  = document.getElementById('submitButton');
		// console.log(mySubmitBotton);
		// ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

		//获取原生dom第二种方式
		console.log(this.refs.submitButton);
		this.refs.submitButton.style.color = 'red';
    };

    //子组件与父组件参数传递
	handleChildValueChange(event) {
		this.setState({age: event.target.value});
    };
    
	render() {
		// setTimeout(() => {
		// 	//更改 state 的时候
		// 	this.setState({username: "zero", age: 41});
		// }, 4000);
		return (
			<div>
				<h2>页面的主体内容</h2>
                <p>接收到的父页面的属性：userid: {this.props.userid} username: {this.props.username}</p>
				<p>age: {this.state.age}</p>
				<input id="submitButton" ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this, 29)}/>
				<ContentIndex {...this.props} id={4} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}


BodyIndex.defaultProps = defaultProps;