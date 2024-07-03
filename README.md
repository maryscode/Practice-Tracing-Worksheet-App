# Practice Tracing Printable PDF React App

This app dynamically generates a PDF tracing worksheet based on user input. Intended for students learning to write in uppercase English letters. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\


## Deployment
**Auto Deployment is set up with Hostinger**

When changes are committed to the Master branch, `.github/workflows/publish.yml` action will:
1. Run a build step
2. Push /build to `build` branch of same repo

Hostinger is set up to auto deploy the contents of /build directory to the root (i.e. /public_html) directory.

Set up is based on the following resources:
[Publish Sub-directory Action](https://github.com/s0/git-publish-subdir-action)

[Create Deployment Pipeline for React App on Hostinger](https://dev.to/mwoodson11/create-deployment-pipeline-for-react-app-on-hostinger-5bc9)


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
