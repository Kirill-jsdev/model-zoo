import React from 'react'
import './App.css'
import ModelZooBrowser from './Treemap/ModelZooBrowser'
import { useLogin, useGetModel, useGetVersions } from './API/api'

const JOB_ID = 'bd4f208e-808d-492d-a4c0-550e42924445'
const VIRSIONS_ID = '5522a4b9-ecc4-48d1-aa16-fb1563bf2a7e'


function App() {

    const { user } = useLogin()

    const {model} = useGetModel(JOB_ID, user?.token)

    const {versions, error: virsionsError} = useGetVersions(VIRSIONS_ID, user?.token)

    console.log('versions', versions)
    console.log('virsionsError', virsionsError)

  return (
    <div className="App">
        {/* <div style={{width: 100, height: 50, margin: 20}}>Login</div> */}
        {model && versions && <ModelZooBrowser model={model} versions={versions} />}
    </div>
  );
}

export default App

