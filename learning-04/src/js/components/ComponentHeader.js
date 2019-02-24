import React from 'react';
import myStyle from '../../css/style.css'
export default class ComponentHeader extends React.Component {

	constructor() {
		super();
		this.state = {
			miniHeader: false //默认加载的时候还是高（不是 mini）的头部
		};
	};

	switchHeader() {
		this.setState({
			miniHeader: !this.state.miniHeader
		});
	};

	render() {
		const styleComponentHeader = {
			header: {
				backgroundColor: "#333333",
				color: "#FFFFFF",
				// "padding-top": (this.state.miniHeader) ? "3px" : "15px",
				paddingTop: (this.state.miniHeader) ? "3px" : "15px",
				paddingBottom: (this.state.miniHeader) ? "3px" : "15px"
			},
			//还可以定义其他的样式
		};
		return (
			<header style={styleComponentHeader.header} className="smallFontSize"
				onClick={this.switchHeader.bind(this)}>
				<h1 class={myStyle.myStyle}>这里是头部</h1>
			</header>
		)
	}
}
