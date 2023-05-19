import React from 'react'
import ModelZooBrowser from './ModelZooBrowser/ModelZooBrowser'
import { useLogin, useGetModel, useGetVersions} from './API/api'

const JOB_ID = 'bd4f208e-808d-492d-a4c0-550e42924445'
const DATASET_ID = '5522a4b9-ecc4-48d1-aa16-fb1563bf2a7e'

const JOB_ID_TWO = '8a743fef-4f68-4152-83b4-3da9b749732d'
const JOB_ID_TREE = '37874202-7626-494d-940d-f659e0cb44a0'
const JOB_ID_FOUR = '809d93bd-13a6-4446-bbcc-d64af0c93124' //ONE DAY TIMESAMPLE
const JOB_ID_FIVE = '7192115f-f516-4180-b9cf-72661de472e3' //ONE HOUR TIMESAMPLE
const DATASET_ID_TWO = 'b5a4cd8c-b7df-431b-869c-5f0f914774b6' //not changed yet

//FORECASTING JOBS
const JOB_ID_SIX = 'c727bb46-3c37-4e29-a5ea-2a868e7c23e8'
const JOB_ID_SEVEN = '14f25d7c-cca9-40a5-bcd8-fa7b34322824' //TWO DAYS
const JOB_ID_EIGHT = 'f5d95215-21e3-41f8-8de1-17daec229121' //TWO DAYS

function App() {

    const { user } = useLogin()
    const {model} = useGetModel(JOB_ID_SEVEN, user?.token, 'forecast')
    const {versions} = useGetVersions(DATASET_ID_TWO, user?.token)

    let variables: any

    if (versions && versions[0]?.variables)
      variables = versions[0].variables

  return (
    <div className="App" style={{width: '80%', margin: '20px auto'}}>
        {model && variables && <ModelZooBrowser model={model} dataset={versions[0]} />}
    </div>
  );
}

export default App

