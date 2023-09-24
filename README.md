[MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# REDUX FEEDBACK WEBSITE

## Description

_Duration: 1 Weekend Sprint_

Our client requested a feedback submission Website for their online learners. They were having difficulty measuring how well their learners were absorbing information and wanted a simple way to solict feedback in a way that was quick and simple.

The React website is 5 short pages of feedback, collecing 4 number from 1-10 input fields, and 1 text input. This allows us to submit this to our PostreSQL database for future assesment and analysis. We are using a Redux reducer to hold our data between each page rather than on our Server, and ultimately moved that information to our Database. See the data.sql file for Table set up and values.  


To see the fully functional site, please visit: [TO BE RELEASED SHORTLY](www.heroku.com)

## Screen Shot

![PAGE 1](images/image.png)
![REVIEW PAGE](images/image-1.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [React-Redux] (https://react-redux.js.org/)
- [PostgresSQl](https://www.postgresql.org/download/)
- [PostressPool] (https://www.npmjs.com/package/pg-pool)
- [Axios] (https://axios-http.com/docs/intro)
- [Redux-Logger] (https://www.npmjs.com/package/redux-logger)


## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!
7. You will also need to install React-Redux `npm install react-redux`
8. You will also need to axios if you dont have it already `npm install axios`


## Usage
How does someone use this application? Tell a user story here.

Once the client and server are running from your code editor it is fairly straightforward. Additional React components can be created by copy and pasting what code is already in existence. 

## License

None Required.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support
If you have suggestions or issues, please email me at [mtthw.jhnson@gmail.com](www.google.com)