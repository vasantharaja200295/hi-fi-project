import React from 'react'
import hifi from './assets/open-hand.png'

const App = () => {
  const [show, setShow] = React.useState(false)
  return (
    <div>
      {show && <img src={hifi} alt="hifi" height={'200px'} width={"200px"}/>}
      <h1>Hi-Fi project</h1>
      <button onClick={() => setShow(!show)}>hifi</button>
    </div>
  )
}

export default App