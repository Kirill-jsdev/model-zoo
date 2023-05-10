import {useState, useEffect} from 'react'

export const useLogin = () => {

    const [user, setUser] = useState<any>()
    const [error, setError] = useState<any>()

    useEffect(() => {

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

    return {user, error}
}


export const useGetModel = (jobId: string, token: string) => {

    const [model, setModel] = useState<any>()
    const [error, setError] = useState<any>()

    useEffect(() => {

    const url = `https://tim-platform-dev.tangent.works/api/v5/detection-jobs/${jobId}/results/model`

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

    return {model, error}
}

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

    return {versions, error}
}


/////////////////////////////////////////////////////////////////////////////
export const useGetDataset = (datasetId: string, token: string) => {

  const [dataset, setDataset] = useState<any>()
  const [error, setError] = useState<any>()

  useEffect(() => {

  const url = `https://tim-platform-dev.tangent.works/api/v5/datasets/${datasetId}`

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
      setDataset(data)
    })
    .catch(error => {
      setError(error)
    })
  }, [datasetId, token])

  return {dataset, error}
}

