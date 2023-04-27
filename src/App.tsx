import React from 'react'
import './App.css'
import ModelZooBrowser from './Treemap/ModelZooBrowser'
import { useLogin } from './API/api'


function App() {

    const { user, error } = useLogin()

    console.log('USER DATA', user?.token)
    console.log('EROR', error)

  return (
    <div className="App">
        {/* <div style={{width: 100, height: 50, margin: 20}}>Login</div> */}
        <ModelZooBrowser />
    </div>
  );
}

export default App

