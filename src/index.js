import React from 'react'
import ReactDOM from 'react-dom';
import './style.less';

const helloDecrator = (target) => {
  return target;
}

@helloDecrator
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="app">
          hello, this is react demo...
        </div>
      </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
)
