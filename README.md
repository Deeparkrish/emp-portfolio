
# Employee Portfolio  
    
  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/emp-portfolio" />
    <img src="https://img.shields.io/github/issues/deeparkrish/emp-portfolio" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/emp-portfolio" >       
  </p>
  <p align="left"> 
     <img src="https://img.shields.io/github/languages/top/deeparkrish/emp-portfolio"/>
    <img src="https://img.shields.io/badge/React.js-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-express-red" >
    <img src="https://img.shields.io/badge/-JSX-orange"/>
    <img src="https://img.shields.io/badge/-HTML-lightgreen"/>
    <img src="https://img.shields.io/badge/-BootStrap-pink"/>

</p>
   
  ## Description
   An employee portfolio that showcases the various skillsets of an employee using React, that helps an employer looking for 
   candidates with experience building single-page application, sassess whether he/she is  a good candidate for an open position.  
   This will be a single page application (SPA).
   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  
 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [MockUp](#mockup)
  * [Testing](#testing)
  * [Deployment](#deployment)
  * [Contribution](#contribution)
  
  
  ##  Installation
  
      npx create-react-app <app name>
      

   ##  Usage
  
 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  
  
  ## License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)<br />
  This app is covered under MIT license.
  
   ## Process
   This  single-page application portfolio for a web developer functios as follows :
   *  When the portfolio app is loaded, the launching  page containing a header, a section for content, and a footer is displayed.
   *  The header contains : the developer's name and navigation with titles corresponding to different sections of the portfolio.
   *  The different sections  include  About Me, Portfolio, Contact, and Resume. 
   *  Upon selecting a nav title  it is highlighted. 
   *  Upon clicking on a navigation title, the user is presented with the corresponding section below the navigation without the page reloaded.
   *  When the portfolio is loaded for  the first time, the About Me title and section are selected by default.
   *  The About Me section contains a recent photo or avatar of the developer and a short bio about him.
   *  The Portfolio section contains  titled images of six of the developer’s applications.
   *  Each project  featured in the portfolio, includes the following:
        *   An image of the deployed application ( a screenshot)
        *   The title of the project
        *   A link to the deployed application
        *   A link to the corresponding GitHub repository
   *  The Contact section has a contact form with fields for a name, an email address, and a message.
   *  When the user moves the  cursor out of one of the form fields without entering text, he receives a notification that this field is required.
   *  The user also receives a notification if he enters an email thats not in the proper format, this validation is done 
      using a helper function called, 'validateEmail'.
   *  The Resume section has  a list of the developer’s proficiencies and a link to a downloadable resume.
   *  The footer holds, icon links to the developer’s Phone, Email, GitHub and LinkedIn profiles.
   *  The different sections of the portfolio page is accomplished using Components :
        *   A single Header component that appears on multiple pages
        *   A single Navigation component within the header that will be used to conditionally render the different sections of the portfolio.
        *   A single Project component that will be used multiple times in the Portfolio section
        *   A single Footer component that appears on multiple pages   
        
  ## Technologies 
  * Reactjs: React is a JavaScript library for building modern applications.It can be used for development of both web and mobile applications
  * JSX  : A syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). .
  * Bootstrap : Open-source CSS framework directed at responsive, mobile-first front-end web developmen
  * npm : A package manager for the JavaScript programming.

 
 
  ##  Mockup
  <div>
  <img src ="https://github.com/Deeparkrish/emp-portfolio/blob/main/src/assets/images/mockup/about.png" width ="400px" height ="300px" />
  <img src ="https://github.com/Deeparkrish/emp-portfolio/blob/main/src/assets/images/mockup/project.png"  width ="400px" height ="300px" />
  <img src = "https://github.com/Deeparkrish/emp-portfolio/blob/main/src/assets/images/mockup/resume.png" width ="400px" height ="300px" />
  <img src ="https://github.com/Deeparkrish/emp-portfolio/blob/main/src/assets/images/mockup/contact.png"  width ="400px" height ="300px" />
  </div>

  ## Testing
   App can be tested on your browser/ deployed heroku site
    browser : http://localhost:3000
  

  ## Deployment
   ### Mockup 
   ![Image](https://github.com/Deeparkrish/emp-portfolio/blob/main/src/assets/images/mockup/deploy.png)
    
   ### Link 
    Github Page:https://deeparkrish.github.io/emp-portfolio
  

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)
  








