# By Bits Code Challenge

The purpose of this repository is to meet the criteria of the By Bits Coding Challenge. <br>
This criteria being:
  - Build a simple web application with 2 pages. Use the two Policy API endpoints provided. 
  - POST and GET data to the API. This data will be then used to authorised the user's login and to display the details of a car policy.
  - First page is a login screen which takes a username and a password.
  - Second page is a simple card which will display the details of a car policy fetched from the Policy details API endpoint.
  - The login has to be authorised with a token.
  - We make a POST request to the Login API endpoint with the username, password and type. We receive a response an store the access_token to then authorise the user's login.
  - Once authorised, we will redirect the user to the second page.

## Prerequisites
1. Node.js v6.0 or greater <br>
2. Package Manager: NPM or Yarn (you will need to have NPM installed in order to install and use Yarn).

## Installation

Cloning repository to your local machine.

#### SSH
Run in your terminal.
`git clone git@github.com:CarolinaCapilla/bymiles-react-api.git your-app-name`
#### HTTPS
Run in your terminal.
`git clone https://github.com/CarolinaCapilla/bymiles-react-api.git your-app-name`
#### Github CLI
Run in your terminal.
`gh repo clone CarolinaCapilla/bymiles-react-api your-app-name` <br>
Bare on mind that for `gh repo clone` command to work you will need to have Github CLI installed. Here's the link to its repository which contains detailed step by step installation process [Github CLI Repository](https://github.com/cli/cli).

Inside the repo folder.
Run `yarn` or  `npm install` to install all the dependencies needed to run the app properly.

## Running locally
Run `yarn start` or `npm start` then open your favourite browser and navigate to http://localhost:port-number/.

## Estimate time of completion
- 2-3 hours of research.
- 2 hours for designing both pages.
- 12 hours approx (in the span of 4 days) to write the code and test that it works fine.
