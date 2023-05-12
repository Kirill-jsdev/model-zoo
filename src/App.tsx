import React from 'react'
import ModelZooBrowser from './ModelZooBrowser/ModelZooBrowser'
import { useLogin, useGetModel, useGetVersions} from './API/api'

const JOB_ID = 'bd4f208e-808d-492d-a4c0-550e42924445'
const DATASET_ID = '5522a4b9-ecc4-48d1-aa16-fb1563bf2a7e'

const JOB_ID_TWO = '8a743fef-4f68-4152-83b4-3da9b749732d'
const JOB_ID_TREE = '37874202-7626-494d-940d-f659e0cb44a0'
const DATASET_ID_TWO = 'b5a4cd8c-b7df-431b-869c-5f0f914774b6' //not changed yet


function App() {

    const { user } = useLogin()
    const {model} = useGetModel(JOB_ID_TWO, user?.token)
    const {versions} = useGetVersions(DATASET_ID_TWO, user?.token)

    let variables: any

    if (versions && versions[0]?.variables)
      variables = versions[0].variables

  return (
    <div className="App">
        {model && variables && <ModelZooBrowser model={model} dataset={versions[0]} />}
    </div>
  );
}

export default App

