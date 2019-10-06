# Jury Instructions
This is a project to assist judges/practitioners fill out criminal pattern jury instructions.

## Documentation
For more information about this project and how we're building it please see the `docs` folder 
* [Tech Spec](/docs/Tech_Spec.md) 
* [Best Practices](/docs/Best_Practices.md) 
* [Jury Instructions](/docs/SampleInstructions/)

## Setup
To run this locally the following software is required:
*  [NodeJs](https://nodejs.org/en/)

If on a Mac you can install Node and npm via Homebrew with `brew install node`

### Local server
To run this application on your local machine you first need to install dependencies.  From the project root, run the following command:
```shell
npm install
```

Once that completes you can run the application by running the following from the project root:
```shell
npm start
```

#### Docker
Alternatively if you wish to run this in Docker instead of on your local you may do so using the included `Dockerfile`. To use the Docker simply run the following commands:
```shell
docker build -t juryinstructions:latest .
docker run -d -p 4000:4000 juryinstructions:latest
```
To stop the conatiner run:
```shell
docker ps
```
Take note of the `CONTAINER ID` then run:
```shell
docker stop <container id>
```
You may then make changes to the code and re-run the initial `build` and `run` commands. 

For more information about Docker please visit their website https://docker.com

## Using this product
When a local node instance is running you will see a message on your terminal window that says `App listening on port 4000!`. With Docker no message will be displayed other than the full container id hash. You can now visit and use the app by going to http://localhost:4000/. 

As indicated above in the *Setup* section: for Docker any code change will require a re-build of the container. Local node instances reload dynamically so you do not need to restart the app unless you make changes to a template.

## Testing
To run unit tests simply run this command from the project root:
```
npm test --coverage
```
Running with the `--coverage` flag will let you scan with [SonarQube](/sonarqube/README.md) (after configuring SonarQube).  You will need to set `sonar.javascript.lcov.reportPaths=coverage/lcov.info` which can be done in the UI.

## Sources and Links
If referencing any third party service, code, etc, cite it here.
