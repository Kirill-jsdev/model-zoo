import React, { useEffect, useState } from 'react'
import ModelZooBrowser from './ModelZooBrowser'

//FORECASTING JOBS
const JOB_ID_SIX = 'c727bb46-3c37-4e29-a5ea-2a868e7c23e8'
const JOB_ID_SEVEN = '14f25d7c-cca9-40a5-bcd8-fa7b34322824'
const JOB_ID_EIGHT = 'f5d95215-21e3-41f8-8de1-17daec229121'

const DATASET_ID_TWO = 'b5a4cd8c-b7df-431b-869c-5f0f914774b6' //not changed yet


function App() {

    const { user } = useLogin()
    const {model} = useGetModel(JOB_ID_SEVEN, user?.token)
    const {versions} = useGetVersions(DATASET_ID_TWO, user?.token)

    let variables: any

    if (versions && versions[0]?.variables)
      variables = versions[0].variables

  return (
    <div className="App" style={{width: '90%', margin: '20px auto'}}>
        {model && variables && <ModelZooBrowser model={model} dataset={versions[0]} />}
    </div>
  );
}

export default App

//Authorization and data fetching hooks simple demo

//1- Authorization
const useLogin = () => {

    const [user, setUser] = useState<any>()
    const [error, setError] = useState<any>()

    useEffect(() => {

    //You should send your credentials to https://tim-platform-dev.tangent.works/api/v5/auth/login
    const credentials = {
        email: "kidman@hollywood.com",
        password: "password.923"
    }

    const url = 'https://tim-platform-dev.tangent.works/api/v5/auth/login'

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
      .catch(error => {
        setError(error)
      })
    }, [])

    //User object will contain authorization token
    return {user, error}
}

//2 - Fetching model data (in this example for Forecasting job, but you can use Model Zoo Browser for Anomaly Detection also)

export const useGetModel = (jobId: string, token: string) => {

    const [model, setModel] = useState<any>()
    const [error, setError] = useState<any>()

    useEffect(() => {

    const url = `https://tim-platform-dev.tangent.works/api/v5/forecast-jobs/${jobId}/results/model`

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
    }

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("MODEL",data)
        setModel(data)
      })
      .catch(error => {
        setError(error)
      })
    }, [jobId, token])

    //This model object. which will be fetched with this API enpoint should be put as a "model" prop to ModelZooBrowser component
    return {model, error}
}

//3 - Get dataset version. In order to get it - you need Dataset ID and authorization token

export const useGetVersions = (datasetId: string, token: string) => {

    const [versions, setVersions] = useState<any>()
    const [error, setError] = useState<any>()

    useEffect(() => {

    const url = `https://tim-platform-dev.tangent.works/api/v5/datasets/${datasetId}/versions`

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
    }

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('VERSIONS', data )
        setVersions(data)
      })
      .catch(error => {
        setError(error)
      })
    }, [datasetId, token])


    //Versions - it is an array with dataset versions.
    //ModelZooBrowser requires one of these versions for "dataset"
    return {versions, error}
}


//In order to properly display ModelZooBrowser, the final implementeition will llok like this:

//<ModelZooBrowser model={model} dataset={versions[0]} />

//On the line above we just put the data from Model endpoint, and one of the dataset versions from Dataset versions endpoint
