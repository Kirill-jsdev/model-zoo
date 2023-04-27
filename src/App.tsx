import React from 'react'
import './App.css'
import ModelZooBrowser from './Treemap/ModelZooBrowser'
import { useLogin, useGetModel } from './API/api'


function App() {

    const { user } = useLogin()

    const {model, error: modelError} = useGetModel('bd4f208e-808d-492d-a4c0-550e42924445', user?.token)

    console.log('Model', model)
    console.log('modelError', modelError)

  return (
    <div className="App">
        {/* <div style={{width: 100, height: 50, margin: 20}}>Login</div> */}
        <ModelZooBrowser model={model} />
    </div>
  );
}

export default App

