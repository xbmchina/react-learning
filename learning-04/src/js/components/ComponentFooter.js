import React from 'react';
// import footerCss from "../../css/footer.css"
var footerCss  =  require("../../css/footer.css");
import xxx from '../../hello.css';
export default class ComponentFooter extends React.Component{
  render(){
    console.log(footerCss);
    return (
      <footer className={footerCss.title}>
        <h1 class={xxx.title}>这里是页脚dasfsdf，一般放置版权的一些信息。</h1>
      </footer>
    )
  }
}
