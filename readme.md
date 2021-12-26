# SYFYMovies Client

https://user-images.githubusercontent.com/69954816/147399221-fced294a-ee09-425a-b7a5-7bb1945d9037.mp4

[Link to the project](https://mysyfymovies.netlify.app/)

### Quick Access

[Overview](#overview) <br/>
[Description](#description) <br/>
[Features](#features) <br/>
[Tech](#tech) <br/>
[Tools used](#built) <br/>
[Dependencies](#dependencies) <br/>

<h3 id = "overview">Overview</h3>

This project uses the React library to build the **client-side** component for the movie application SYFYMovies, based on its existing [server-side code (REST API and database)](https://github.com/eggsistentialarugula/SYFYMovies_API). It includes serveral interface views that handles data through the defined REST API endpoints.

Combined with the [Server-Side component](https://github.com/eggsistentialarugula/SYFYMovies_API), this web application utilizes the _**MERN stack**_, which consists of _MongoDB_, _Express_, _React_, and _Node.js_.

<h3 id = "overview">Description</h3>

This app is meant for people who are fans of Syfy movies or just movie enthusiasts in general. One of their most popular movies series was Sharknado. Users can register for an account, view information about a movie, and add their favorite movies.

This is a Single-Page Application (SPA) created with the **React** library. It uses npm and **Parcel** to compile. It contains a mix of class and function components. State management is taken care of by **React Redux**. The design is taken care of by **React Bootstrap**. The app is hosted on **Netlify**.

<h3 id = "features">Features</h3>

<h4>Main View</h4>

* Return a list of all movies to the user (eat listed item with an image, title, and description)
* Sorts and filters movies
* Ability to select a movie for more details

<h4>Single Movie View</h4>

* Returns data (description, genre, director, image) about a single movie to the user
* Allows users to add a movie to their list of favorites

<h4>Login View</h4>

* Allow users to log in with a username and password

<h4>Register view</h4>

* Allow new users to register (username, password, email, birthday)

<h4>Genre view</h4>

* Returns data about a genre, with a name and description
* Display movies within the selected genre

<h4>Director view</h4>

* Returns data about a director (name, bio, birth year, death year)
* Displays movies that the selected director created

<h4>Profile view</h4>

* Allows users to update their user info (username, password, email, date of birth)
* Allows existing users to deregister
* Displays favorite movies
* Allows users to remove a movie from their list of favorites

<h3 id = "tech">Tech</h3>

* Single-Page Application (SPA)
* Written using the React Library and in ES2015+
* State Routing is used to navigate between views and share URLs
* Uses Parcel as its build tool
* Respects the Flux pattern using React Redux
* Responsive web design using Bootstrap as a UI library
* Hosted on Netlify

**Client** _React_, _React Redux_, _React Bootstrap_, _Parcel_ <br/>
**Server** _Node_

<h3 id = "built">Built With</h3>

* React
* React Bootstrap
* VS Code
* MongoDB
* Node.js

<h3 id = "dependencies">Dependencies and DevDependencies</h3>

 * @parcel/transformer-sass@2.0.0-beta.3.1
 * parcel-bundler@1.12.5
 * axios@0.21.1
 * prop-types@15.7.2
 * react@17.0.2
 * react-bootstrap@.6.1
 * react-dom@17.0.2
 * react-redux@7.2.4
 * react-router-dom@5.2.0
 * redux@4.1.1
 * redux-devtools-extension@2.13.9




