import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName : "krishna",
    age : 21
  };

  let myArr = [1,2,3];



  return (
    <>
      <h1 className='text-red-300 mb-5'> Coder  </h1>
      <Card name="chai" btnText="click me" />
      <Card name="pallavi"  />

    </>
  )
}

export default App
