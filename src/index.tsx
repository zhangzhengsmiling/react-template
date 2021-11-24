import React from 'react';
import ReactDOM from 'react-dom';
import './a.less';
import TestPage from '@/pages/TestPage';

const App = () => {

  return (
    <React.StrictMode>
      <div className="a">
        {window.APP_CONFIG.aaa}
      </div>
      <TestPage />
    </React.StrictMode>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
