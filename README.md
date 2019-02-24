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

##### 1.State属性
state对于模块来说属于自身属性
初始化：this.state = {username:'zero'};
初始化可以放置在构造函数constructor里
修改state:this.setState({username:'zero'});
state的作用域只属于当前的类，不污染其他的模块


##### 2.Props属性
props对于模块属于外来属性
传递参数：<BodyIndex username="zero" />
模块中接收参数： this.props.username

 
##### 3.事件与数据的双向绑定
事件绑定：注意ES6语法：可以在构造函数里绑定 this.updateHandler = this.updateHandler.bind(this);
h或者调用时绑定： onClick={this.changeUserInfo.bind(this,66)}

<input type="button" value="提交" onClick={this.changeUserInfo.bind(this,90)}>

子页面向父页面传递参数的方法
    在子页面中通过调用父页面传递过来的事件props进行组件间的参数传递
    好好理解这里的onChange事件，为什么不用onBlur

##### 4.可复用组件
Prop验证 const propTypes = {id:PropTypes.number.isRequired,url:PropTypes.string}
默认Prop值  const defaultProps = {text:'Hello World'};
传递所有参数的快捷方式  <Component {...this.props} more="values" />


##### 5.组件的Refs
原始获取方法： var myDiv = document.getElementById("myDiv").findDOMNode(myDiv).style.color='green';

方法二 refs
    定义：<input ref ="myInput" />
    获取：this.refs.myInput

注意事项：
    Refs是访问到组件内部DOM节点唯一可靠的方法
    Refs会自动销毁对子组件的引用
    不要在render或者render之前对Refs进行调用（因为组件还没加载好，调用就没有意义了）
    不要滥用Refs

##### 6.独立组件间共享Mixins




### learning-04
主要关于css样式

##### 1.内联样式
CSS命名规范： dialog_confirm-button--highlight

在render函数里定义
const styleComponentHeader = {
    header: {
        backgroundColor: '#333333',
        color: '#FFFFFF',
        'padding-top': '12px',
        'paddingBottom: '16px'
    }
};

注意样式的驼峰写法
style = {styleComponentHeader.header}

文件中引用css的样式
注意class需要更改成className
确定是动画、伪类（hover）等不能使用


##### 2.内联样式中的表达式
paddingBottom：(this.state.minHeader)?"3px":"15px"
注意好好理解这里的state引起样式的即时变化


##### 3.CSS模块化
原因：避免全局污染、命名混乱、依赖管理不彻底、无法共享变量、代码压缩不彻底

npm install --save-dev style-loader css-loader 
npm install --save-dev babel-plugin-react-html-attrs   为了使用原生的html属性名

导入：var footerCss = require("../css/footer.css")
使用：<footer class={footerCss.minFooter}>
:local(.normal){color:green;}     局部
:global(.btn){color:red;}         全局
 

CSS模块化的优点
    所有样式都是local的，解决了命名冲突和全局污染问题
    class名生成规则配置灵活，可以此来压缩class名
    只需引用组件的JS就能搞定组件所有的js和css
    依然是css，几乎零学习成本


jsx样式与css的互转
工具：https://staxmanade.com/CssToReact/

UI框架： https://ant.design/index-cn



### learning-05
主要介绍react-router的页面跳转
https://github.com/ReactTraining/react-router

##### 1.概念
控制页面的层级关系
单页面构建Router控制

底层机制
React： state/props -> Components ->UI
Router: location ->Router -> UI


##### 2.router传参
定义： path="list/:id"
使用： this.props.params.id 








































































