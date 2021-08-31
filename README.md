### To see the production (master) web app -- https://app.modern-musician.com/whosah

## Getting Started
- You'll need git, npm, and aws-cli tools installed to run this locally.
  ``` 
  npm install -g @aws-amplify/cli 
  ```
- Clone the repo
  ```
  git clone https://github.com/spencergrimes/street-team-app.git
  ```
- Go to your newly-created directory
  ```
  cd street-team-app
  ```
  
## Setting up the backend
- ```
  amplify configure 
  ```
  - Follow the prompts
- Close the console browser window that gets opened. Back in the terminal, press "Enter"
  - ```
  region: us-east-1 <br>
  username: type your aws console username for the modern-musician environment
  ```
- Close the console browser window that gets opened. Back in the terminal press "Enter"
  - ```
  accessKeyId: enter your access key from the csv file you were sent by the system admin
  secretAccessKey: enter the secret access key from the csv file you were sent by the system admin
  profile: enter whatever name you want your local profile to be stored under on your machine
  ```
  - Should get the message "Successfully set up the new user"
- Pull the dev backend environment into your local environment
  - ```
  amplify env checkout dev 
  ```
- Pull the latest backend into your local environment
  - ```
    amplify pull 
    ```

## Install node and run the react app
``` 
npm install
npm run start
```

This should run locally on http://localhost:3000/ by default

### NOTE: using AWS Amplify CI/CD, code pushes to master branch with automatically be deployed to production
