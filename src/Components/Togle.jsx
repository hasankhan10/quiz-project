import React, { useEffect, useState } from 'react'

function Togle({handleMode}) {
  const [mode, setMode] = useState(true)
const changeMode = () => {
  setMode(!mode)
  handleMode(mode)
}
  return (
    <>
      <button onClick={changeMode}>
        {mode? <h1 className=' text-5xl'>🌑</h1> : <h1 className='text-5xl'>☀️</h1>}
      </button>
    </>

  )
}

export default Togle