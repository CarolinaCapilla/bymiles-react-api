# By Bits Code Challenge
![React](https://img.shields.io/badge/react-v17.0.1-blue.svg)
![ReactDOM](https://img.shields.io/badge/reactDOM-v17.0.1-blue.svg)
![ReactSCRIPTS](https://img.shields.io/badge/reactScripts-v12.1.8-blue.svg)

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
Run `yarn start` or `npm start` <br>
Open your favourite browser and navigate to http://localhost:port-number/.

## Estimate time of completion
- 2-3 hours of research.
- 2 hours for designing both pages.
- 8-10 hours approx (in the span of 4 days) to write the code and test that it works fine.

## Libraries used, decisions and why

Libraries:
- Material UI: Although I could have used pure CSS to achieve the same results in terms of design. I have decided to use Material UI for 3 reasons. I have never used it before and I really wanted to try it out. Faster and easier stylized web development. Responsive designs right out of the box.

Decisions: 
- Functional or Stateless components. Since I have decided to use Hooks it was a necessary choice to use functional components.
- Hooks. I use Hooks together with Context to manage the state of the components in the app. Additionally, it is use to take care of conditionally rendering, one component or the other, if a condition is met. As with the design, I could have achieved the same results with Class-Based or Stateful components but in order to make the logic of the app less complex and more readable I've decided to use Hooks. Also, it was my first time using Hooks so it was a good chance for me to learn more about them and their usage.
- Fetch API instead of Axios. After thinking what was that I needed to do with the API provided, I've decided that the features in the Fetch API were good enough to meet those     needs and therefore it was not necessary to add an extra library to my React project in order to make it work properly.
- Splitting components into presentational and functional components. In order to make the project structure more organised and the code easier to read, maintain and reuse, I've split the 2 main components Login and PolicyDetails into 4 components. Login is a functional component that holds the logic and state; LoginFrom is a presentational component; PolicyDetails is another functional component that holds the logic and state; PolicyCard is also a presentational component.
- Keeping function concise (declaring them to take care of only 1 responsibility or action) will again make that the code is more organised, easier to read, maintain and reuse.

**This challenge was super fun to do, I have learnt a lot and enjoyed myself, it was hard at times but the result is very rewarding and definitely worth it. I am very happy that I was given the chance to get this challenge done. I have put my whole heart and effort on it and I do hope you enjoy it as much as I did!**

