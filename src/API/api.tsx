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
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        setError(error)
        console.error('Error:', error);
      })
    }, [])



      return {user, error}
}