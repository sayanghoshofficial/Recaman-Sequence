# Assignment: Creating Recaman Sequence on a Number Line using Canvas API in JavaScript

This is the Hosting Page [My Recaman-Sequence](https://64b80fa1dc48e633238ac861--dainty-entremet-900f11.netlify.app/)

## Canvas
![page](https://github.com/sayanghoshofficial/Recaman-Sequence/assets/99132893/5ba695a7-83aa-41ce-9f4b-f204e0fdc6e4)


## Functionality
### By incresing the Range Input It create half circle If the current number 'n' is greater than zero and has not been previously used, move 'n' steps backward. Otherwise, move 'n' steps forward.


### The Recamán sequence is a mathematical sequence defined by mathematician Bernard Recamán in 1964. It is a sequence of integers where the next term is determined by subtracting the current term by the current index if the result is positive and has not been previously included in the sequence. Otherwise, the next term is obtained by adding the current term with the current index.

#### More formally, the Recamán sequence is defined as follows:

##### 1. Start with the first term, a[0] = 0.
##### 2. For each subsequent term, a[n], where n > 0:
######    - If a[n-1] - n > 0 and the result is not already in the sequence, then a[n] = a[n-1] - n.
######  - Otherwise, a[n] = a[n-1] + n.

### The Recamán sequence begins: 0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, ...

### The sequence continues by applying the rules iteratively to generate the next terms. The uniqueness condition ensures that no two terms in the sequence are the same.

### The Recamán sequence exhibits interesting and sometimes unexpected behavior. It has connections to various mathematical areas, including number theory, set theory, and fractal geometry, and has been studied extensively for its properties and patterns.




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
