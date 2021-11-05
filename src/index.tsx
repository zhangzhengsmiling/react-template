import React, { useCallback } from 'react'
import ReactDOM from 'react-dom';
import styles from './a.module.less'
import './a.less';
import TestPage from '@/pages/TestPage';

const App = () => {

  const handleClick = useCallback(() => {
    alert('clicked...')
  }, []);

  return (
    <React.StrictMode>
      <div className={styles.app}>
        hello, this is react demo...
        <p>
          <button onClick={handleClick}>click me...</button>
        </p>
      </div>
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
