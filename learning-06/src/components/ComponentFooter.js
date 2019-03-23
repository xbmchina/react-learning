import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class ComponentFooter extends React.Component{
  render(){
    return (
      <footer>
        <h1>这里是页脚，一般放置版权的一些信息。</h1>
        <ul>
        <Link to="/details/123213"><li> 测试依稀</li></Link>
        </ul>
      </footer>
    )
  }
}
