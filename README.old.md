# Introduction to React

## Overview

We're going to take a bare-bones look at React. We'll start by creating a new React app, then we'll look at the basic structure of a React app and how to create a React component.

## Objectives

1. Create a new, minimal React app.
1. Describe the basic structure of a React app.
1. Importing Bootstrap and Stylesheets into a React app.
1. Starting with index.js, learn about `JSX` and explain how it's used to render HTML.
1. Create a React component.
1. Pass props to a React component.
1. Use props to render dynamic content.
1. Pass children through a React component.

## Create a new, minimal React app

In your root project folder, type the following command to create a new React app with a minimal template:

```bash

npx create-react-app . --template minimal

```

Let's break down the command:

-   `npx` is a tool that allows us to run Node packages without installing them globally.
-   `create-react-app` is a tool that creates a new React app.
-   `.` is the path to the folder where we want to create the app. Since we're already in the root folder, we use `.` to indicate the current folder.
-   `--template minimal` is an option that tells `create-react-app` to use the minimal template.

## Describe the basic structure of a React app

Let's take a look at the basic structure of a React app. Open the project in your code editor and take a look at the files and folders in the root folder. You should see something like this:

```bash

├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── public
├── src
└── yarn.lock

```

The `node_modules` folder contains all of the packages that our app depends on. The `package.json` and `package-lock.json` files contain information about the app and its dependencies. The `public` folder contains the HTML file that our React app will be rendered in. The `src` folder contains the JavaScript files that make up our React app.

## Importing Bootstrap and Stylesheets into a React app

Before we start working with React, let's bring in Bootstrap so we can style our app. In the termal, type the following commands to install Bootstrap and Sass:

```bash

npm install bootstrap
npm install sass

```

Next, create our base stylesheet in the `src` folder and title it `App.scss`. In the file, add the following code:

```scss
@layer framework {
	@import "bootstrap/scss/bootstrap";
}
```

Now import the stylesheet into the `App.js` file in the `src` folder. At the top of the file, add the following line:

```js
import "./App.scss";
```

Let's also import the Bootstrap javascript file. Open the `index.html` file in the `public` folder. At the bottom of the file, add the following line:

```html
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
	crossorigin="anonymous"></script>
```
