import React from 'react'
import './App.css'
import ModelZooBrowser from './ModelZooBrowser/ModelZooBrowser'
import { useLogin, useGetModel, useGetVersions } from './API/api'

const JOB_ID = 'bd4f208e-808d-492d-a4c0-550e42924445'
const VIRSIONS_ID = '5522a4b9-ecc4-48d1-aa16-fb1563bf2a7e'

const JOB_ID_TWO = '8a743fef-4f68-4152-83b4-3da9b749732d'
// const VIRSIONS_ID_TWO = '5522a4b9-ecc4-48d1-aa16-fb1563bf2a7e' //not changed yet


function App() {

    const { user } = useLogin()

    const {model} = useGetModel(JOB_ID_TWO, user?.token)

    console.log('Model In my APP', model)

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

