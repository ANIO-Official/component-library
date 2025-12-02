//import { useState } from 'react'
import './App.css'
import AlertBox from './components/AlertBox/AlertBox'

function App() {

  return (
    <>
      <AlertBox
      type='success'
      message="You've successfully added item to the cart!"
      onClose={()=>alert('"Closed" the alert. :)')}>
        <p><i>You can't actually close this but let's be imaginative.</i></p>
      </AlertBox>
    </>
  )
}

export default App
