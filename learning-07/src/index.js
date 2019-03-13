var React = require('react');
var ReactDOM = require('react-dom');
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import BodyIndex from './components/BodyIndex';
// import fn from './index-demo.js';
// fn()
import { Provider } from 'react-redux'
import configureStore from './store/index'

const store = configureStore();

class Index extends React.Component {

  render() {

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
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app'));
