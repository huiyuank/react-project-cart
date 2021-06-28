# React JS Tutorial

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled using [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

Statically hosted on Github at this [page](https://huiyuank.github.io/react-project-cart/).
Refer to [deployment](#deployment) section below for more information.

### Interface

![image](https://user-images.githubusercontent.com/71057935/122043401-e2ce4e00-ce0d-11eb-83ff-77dbec6a3135.png)

#### Counter
Reflects number of items in cart with some quantity

#### Reset
Resets cart to original state with full item list (normally resets all existing cart item quantities to 0)

#### Increment
Increment item quantity by 1

#### Decrement
Decrement item quantity by 1 (minimum zero)

#### Delete
Delete item from cart entirely

## About React JS

React is a JavaScript library for building user interfaces efficiently. It was developed by Facebook in 2011 and is a dominant library for building interfaces, hence, it would be crucial to be familiar with this especially as a front-end software developer. 

React is built in components, and components are arranged in a tree architecture. Each component is a piece of UI and they are put together to build complex UIs.

### Components

A component is commonly implemented as a JavaScript class. It holds a state property and a render that will output a ReactElement. A ReactElement maps to a DOM element as a lightweight representation as a JavaScript object. Babel compiles the JSX code into browser-compatible version of JavaScript.

### Setting up Development Environment

1. Node.js (Node >= 10.16 and npm >= 5.6 at time of writing)
2. Visual Studio Code (VS Code)
3. (optional) VS Code extension: Simple React Snippets

![image](https://user-images.githubusercontent.com/71057935/118087051-8683a300-b3f7-11eb-8274-fa33717286fa.png)

4. (optional) VS Code extension: Prettier - Code formatter

![image](https://user-images.githubusercontent.com/71057935/118087112-a1eeae00-b3f7-11eb-8521-f5dc0111223c.png)

Refer to the React [documentation](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) for more information.

## Application Code

In `index.html`, there is a container div with id "root". The container is meant to be the parent element to hold all corresponding React components.

In `index.js`, using ReactDOM `render()` method, pass in two arguments:
1. the React component to be rendered, and 
2. the location where you want to render it. Here we reference the container with id "root".

![image](https://user-images.githubusercontent.com/71057935/118088212-4e7d5f80-b3f9-11eb-9e90-a7f72e70ba4f.png)

Create a `components` folder to keep all the component files.

![image](https://user-images.githubusercontent.com/71057935/118092415-ab2f4900-b3fe-11eb-860e-9cff5fceec0d.png)

The above image shows the tree of components that we have in this application. In order to keep a single source of truth, we keep the state property at the parent element of all children element, so that those elements can retrieve it as props. Essentially, we have lifted the state up.

### Rendering Lists

Whenever rendering elements from an array or iterable, each child should have a unique ["key"](https://reactjs.org/docs/lists-and-keys.html) property. Using the `map()` function to build the JSX expression, the "key" property helps React identify which items have changed, are added or are removed. Hence it is important they have a stable identity.

Example in Counters component:

![image](https://user-images.githubusercontent.com/71057935/118090062-a321da00-b3fb-11eb-8dbe-2c57eef7d6ff.png)

With destructuring, we picked out `counters` from this.props, which is an array of objects.

In `return`, we map each object in the array to a Counter component that makes use of the `counters` object's id as a unique key.

### Binding Event Handlers

The new ES6 feature of arrow functions allows us to bind event handlers without having to use the constructor method and binding every event handler manually.

Example in App component:

![image](https://user-images.githubusercontent.com/71057935/118091603-98684480-b3fd-11eb-8a52-9d292c9a4070.png)

### Passing Event Arguments

Example in Counter component:

Arguments can be passed into events using higher-order function. Simply pass an arrow function with the event handler in the body of the function.

![image](https://user-images.githubusercontent.com/71057935/118091851-e9783880-b3fd-11eb-95f3-7b6cfcfb41a1.png)

## Routing

With React Router, we can implement single page rendering that is very fast and gives a better user experience.

Refer to React Router [documentation](https://reactrouter.com/core/guides/quick-start) for more information.

There are three primary categories of components in React Router:
- routers, like `<BrowserRouter>` and `<HashRouter>`
- route matchers, like `<Route>` and `<Switch>`
- and navigation, like `<Link>`, `<NavLink>`, and `<Redirect>`

The router component acts as a wrapper for the application and should be rendered at the root of the element hierarchy.

`<Route>` components define what components to render for which path, and are nested within the `<Switch>` components. When a `<Switch>` is rendered, it searches through its children `<Route>` elements to find one whose path matches the current URL. When it finds one, it renders that `<Route>` and ignores all others. This means that the routes that are more specific (typically longer) paths should be placed before less-specific ones.

`<Link>` components create links in the application. Wherever a <Link> is rendered, an anchor `<a>` will be rendered in the HTML document.

## Spinners

Using [React Spinner](https://www.npmjs.com/package/react-spinners), we can easily create a spinner that will be rendered when a page is loading, typically when data is being retrieved from the server or API calls are being done. 
  
The loader accepts a `loading` prop as a boolean and renders `null` if `loading` is set to false. In this example, we have hard coded a `setTimeOut()` to mimic the behaviour under the reset handler function. When the reset button is clicked, we expect the cart to be reset with the original empty cart and set `loading` to false after the time interval. 

![React-Spinner](https://user-images.githubusercontent.com/71057935/123602738-a813df00-d82b-11eb-8a07-530cdaea1ec2.gif)
  
## Available Scripts

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

## Deployment

The app has been deployed onto GitHub pages on the following link:
https://huiyuank.github.io/react-project-cart/

In the project directory,

1. Install gh-pages package as "dev-dependency": `npm install gh-pages --save-dev`
2. Add "homepage" property and deploy scripts to package.json
![image](https://user-images.githubusercontent.com/71057935/117559958-3a192a00-b0bc-11eb-90d9-fed71549a03d.png)
4. Create remote GitHub repo: `git remote add origin https://github.com/huiyuank/react-project-cart.git`
5. Deploy to Github pages (this step creates the gh-pages branch): `npm run deploy`
