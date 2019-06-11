This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# VERSION 1.0 (BÈTA) - CMS (content management system) of Grozeries platform #

The Development Team "Grozeries" of Class 25 welcomes you: may your coding adventure be a good one!
## [🍎🍑Check out the deployed version here🥕🥦](https://grozeries-cms.netlify.com)

## To Do's
- Show current picture of product on the edit and create product forms
- Make a form to change the shop info
- Redirect after logout
- Implement user rights (seller, admin and logistic)
  - seller should only see his own shop, his own products and his own orderlines
  - admin should be able to create a new store, promote a user to either seller or logistic
  - logistic can see all products that need to be picked up, ordered by shop and ordered by customer
- Validation: make sure that the users can only do valid inputs


## Startup
1. Install required dependencies using 'npm install'
2. Check if you wish to run the client side on your local Grozeries server, or using the deployed version (in this version, deployed on Heroku) => this can easily be changed with the the baseUrl used, in the constants.js file (comment switch the baseUrl of line 1 or 2).

After which you can run:

### `npm start`

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Built With

* react
* redux
* redux-thunk


## Authors

* **Albert Smit** - [Albert Smit](https://github.com/AlbertSmit)
* **Edwin Hoenselaar** - [Edwin Hoenselaar](https://github.com/edwinhoenselaar)

See also the list of [contributors](https://github.com/AlbertSmit/Grozeries-Client/graphs/contributors) who participated in this project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
