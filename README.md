# Practice Tracing React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


## Available Scripts
**Auto Deployment is set up with Hostinger**

When changes are committed to the Master branch, .github/workflows/publish.yml action will:
1. Run a build step
2. Push /build to `build` branch of same repo

Hostinger is set up to auto deploy the contents of /build directory to the root (i.e. /public_html) directory.

Set up is based on the following resources:
[Publish Sub-directory Action](https://github.com/s0/git-publish-subdir-action)

[Create Deployment Pipeline for React App on Hostinger](https://dev.to/mwoodson11/create-deployment-pipeline-for-react-app-on-hostinger-5bc9)



### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




### TO DO: 
- width of tracing guide based on orientation
- use map for repeating tracing lines
- create sticker component
- add disclaimers / instructions: 
    - landscape/portrait
    - all caps only
    - toggle on and off sticker
    - nonstandard font bc standard font is ugly!
- create other sticker options
