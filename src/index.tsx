import React, { useCallback } from 'react'
import ReactDOM from 'react-dom';
import './a.less';
import TestPage from '@/pages/TestPage';

const App = () => {

  return (
    <React.StrictMode>
      <div className="a">
        aaa
    </div>
      <TestPage></TestPage>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
)
