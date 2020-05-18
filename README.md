# isworld-project

Updating to New Releases 

Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects.
react-scripts is a development dependency in the generated projects (including this one).
You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly.

Folder structure 

For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

The node folder contains the server whoch needs to be run on to enable the login and sign up page to work.



Available Scripts

In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.


