# Friend Finder App

This is a simple compatibility-based friend pairing app! After filling out 10 question survey, the app compares your answers with those from other users, then display the name and photo of your best match. 

[Live](https://pacific-cove-73996.herokuapp.com/survey)

## Demo

![gif](https://github.com/yukanishijima/friend-finder/blob/master/app/public/assets/images/demo.gif)  


## Technologies & Resources
```
- Javascript
- jQuery
- Node.js
- npm
 - path
 - express
- Express.js
- Heroku
- Bootstrap
```
- This full-stack application uses Express.js which allows us to easily establish our API routes and HTTP request methods.   

- `server.js` file includes the set-up for the server, which takes routings from htmlRoutes.js and apiRoutes.js.  

- `htmlRoutes.js` has 3 GET routes which serve `survey.html`, `home.html`, and 404 error message respectively.  

- `apiRoutes.js` creates server-side APIs which handles a GET request to display all friends JSON data and a POST request to send incoming survey results to the server. 

- The static middleware function is used to serve the static files.

## Future Developments

- Allow users to add their personal information such as location, interests, and etc. so that the app can use the information in order to determine a better match result.
