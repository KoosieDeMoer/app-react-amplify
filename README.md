
## Running locally

Copy .env.example to .env

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the dependencies locally. Don't use yarn for this because the AWS build assumes npm and using yarm with leave the package tree in package-lock.json out of date.<br />

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run-script build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

[AWS Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html#standard) does all this 
