# Fictitious Grocery Store

## Description

- The project goal is to demo:
  - React app w/ Typescript
  - Redux for state management (using latest Toolkit)
  - Material UI for styling
  - Jest tests
- React web app creating a Fictitious grocery store with grapes, peach and apple Available

## Behaviour

- Bag of grapes priced at $5 per bag
- Apples priced at $3 per apple
- Peaches priced at $7 per peach
- Promotions:
  - Buy one bag of grapes and get another bag of grapes for free ("Two for
    the price of one")
  - Buy at least two apples and get a 20% discount on apples
- Checkout:
  - The output should be a number representing the total
    price at checkout after discounts.

## Example Scenarios

```
[ ['grapes', 1], ['apples', 0], ['peaches', 1] ] => 12
[ ['grapes', 1], ['apples', 1], ['peaches', 1] ] => 15
[ ['grapes', 2], ['apples', 2], ['peaches', 1] ] => 16.8
[ ['grapes', 3], ['apples', 5], ['peaches', 2] ] => 36
[ ['peaches', 7], ['grapes', 7], ['apples', 7] ] => 85.8
```

## Environment

- The app relies on two environment variables to be used as feature flags for enabling promotions (grapes and apple).
- `.env` file is responsible for holding these vars

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
