IMPORTANT NOTE: The ModelZooBrowser component is under continuous development and this is the first version.
You will be notified of upcoming releases and we will gladly accept any feedbacks from you in order to make it better

USAGE:
The ModelZooBrowser component developped for React (v. ^17.0.1) and has the following dependencies:

"@visx/group": "1.17.1",
"@visx/hierarchy": "1.7.0",

In order to use the component:
1 - install forementioned dependencies into React (v. ^17.0.1)
2 - copy "ModelZooBrowser" folder into the directory where you locate all of your components
3 - Import the component from this folder to the file where it is supposed to be used

DATA:
The components receives the data from two API endpoints

Endpoint 1: Model endpoint.
ModelZooBrowser accepts two types of models: Anomaly Detection and Forecasting

Anomaly detection endpoint: `https://tim-platform-dev.tangent.works/api/v5/detection-jobs/${JOB_ID}/results/model`

Forecasting endpoint: `https://tim-platform-dev.tangent.works/api/v5/forecast-jobs/${JOB_ID}/results/model`



Endpoint 2: Dataset endpoint.

Dataset endpoint returns and array of dataset version objects. ModelZooBrowser accepts one item from this array (the dataset version you need) as a prop.

Dataset endpoint: `https://tim-platform-dev.tangent.works/api/v5/datasets/${datasetId}/versions`


AUTHENTICATION:

In order to be able to use endpoints mentioned above, you should be authenticated.

Send the object with your email and password to the following endpoint:

Example of Authentication body request:

const authenticationBody = {
    email: "kidman@hollywood.com",
    password: "password.923"
}

This data should be sent to: https://tim-platform-dev.tangent.works/api/v5/auth/login

The data that you receive as a response for this API call will contain a token, which should be used for all mentioned above API calls (Model, Dataset version etc.)
The token should be a part of "authorization" header:

Example of options for fetching the Model data:

const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        },
}

Model endpoint: https://tim-platform-dev.tangent.works/api/v5/detection-jobs/${jobId}/results/model (Example from line 21 of this document)

The same headers should be applied for Dataset Versions endpoint (Line 31 of this document)



NOTE:
The folder with this READ me file also contains an Example1.tsx file with already downloaded data from endpoints

