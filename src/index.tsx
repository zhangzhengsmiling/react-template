import React, { useCallback } from 'react'
import ReactDOM from 'react-dom';
import './style.less'

const App = () => {

  const handleClick = useCallback(() => {
    alert('clicked...')
  }, [])
  return (
    <React.StrictMode>
      <div className="app">
        hello, this is react demo...
        <p>
          <button onClick={handleClick}>click me...</button>
        </p>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root'),
)
