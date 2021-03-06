![Repo Size](https://img.shields.io/github/languages/code-size/JustinVanderschaaf/movie-sagas.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/JustinVanderschaaf/movie-sagas.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/JustinVanderschaaf/movie-sagas.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/JustinVanderschaaf/movie-sagas.svg?style=for-the-badge)

# Movie Sagas

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)

## Description

_Duration: 2 Day Sprint_

movie management application! You will be able to see movies that exist in our DB. We are able to see detailed view for each individual movie on click of the movie picture, including all genres associated with that movie. 

## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 

### Prerequisites

- Download PostgresSql 


### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  git clone {paste SSH link}
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run " npm install " to install all dependencies
7. Create a database named saga_movies_weekend in PostgresSQL
8. The queries in the database.sql file are set up to create all the necessary tables that you need. Copy and paste those queries in the SQL query of the database
9. Run " npm run server " in your VS Code terminal
10. Open a second terminal and run " npm run client "

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

This app was designed to be easy to use. Click on the any movie image on the home page to be brought to a description page about that movie. click the return button to return back to the movie list.
