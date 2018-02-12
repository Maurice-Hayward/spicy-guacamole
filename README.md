# spicy-guacamole :volcano:

A lot of open source projects on GitHub are similar ( e.g. Underscore.js vs. Lodash.js). I'm hoping to create a website that compares different GitHub repos, using the number of contributors, the frequency of updates, the number of downloads, whether there is a code of conduct, and so on. But my unique feature will be the use sentiment analysis. I want to use sentiment analysis on GitHub issues to measure the attitude of the open source project's community. Hopefully, this can help someone decide whether to use and contribute to a project.

# Get Started

1. Follow steps 1-4 from the google cloud nodejs example app [here](https://github.com/googleapis/nodejs-language/#quickstart)
2. Following the above steps you should have authentication json. Put it in the root of the project folder.
3. Create the below .env file adding your google cloud info. Put this file in the root of the project folder

```
//.env
CLIENT_ID=ADD_YOUR_CLIENT_ID_HERE
CLIENT_SECRET=ADD_YOUR_CLIENT_SECRET_HERE
GOOGLE_APPLICATION_CREDENTIALS=ADD_THE_PATH_TO_YOUR_AUTHENTICATION_JSON_HERE
```
