### 安装
参考链接
https://segmentfault.com/a/1190000018025963?utm_source=tag-newest

配置html模板
https://www.webpackjs.com/guides/output-management/#%E8%AE%BE%E5%AE%9A-htmlwebpackplugin

配置webpack开发模式
https://www.webpackjs.com/guides/development/


### react原理教程参考
http://caibaojian.com/react/


### learning-01
主要是关于react的环境搭建


### learning-02
介绍react的基本语法以及生命周期

##### 1.虚拟dom
react是有个虚拟dom的概念

##### 2.组件
组件是react的一个主要特性
组件对于模块化开发的重要性
组件的return函数里返回的HTML节点必须是一个
可以给外部使用的组件定义：export default class CompontentHeader extends React.Component{}
入口的定义：ReactDOM.render(<Index/>,document.getElementById("app"));

##### 3.多组件嵌套
组件也可以通过参数的形式传递
组件的return函数里返回HTML节点必须是一个
注意项目命名的规范与文件的结构化


##### 4.jsx
三目运算符：
{window.yourname==''?'默认用户名':'用户名：'+username}

改变html的状态
<input type="button" value="默认按钮" disabled={false} />

注释
{/**注释**/}

HTML要显示可以进行Unicode转码

HTML要显示还可以通过<div dangerouslySetinnerHTML={{__html:html}} />



##### 5.生命周期
参考官网吧
http://caibaojian.com/react/component-lifecycle.html





### learning-03
主要是react的属性和事件

##### 1.















