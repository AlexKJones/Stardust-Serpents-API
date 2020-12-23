This Application is for the company Stardust Serpents to post and sell products with clients being able to purchase and ask questions about the available products.

Planning Story: My plan was to focus on getting products postable and then to have signed in users be able to post questions on them,  Once completed I wanted to create some advanced functionality to allow users to make actual purchases on the site.

User Stories:
As a unregistered user, I would like to sign up with email and password.
As a registered user, I would like to sign in with email and password.
As a signed in user, I would like to change password.
As a signed in user, I would like to sign out.

As a unregistered user, I would like to see all products
As a signed in user, I would to create questions.
As a signed in user, I would to question on other users' products
As a signed in user, I would to update my questions
As a signed in user, I would to delete my questions

Technologies Used: Javascript,
HTML/CSS, React, React Bootstrap, Axios


Unsolved Problems: user created products with images

Wireframe: [Wireframe](https://i.imgur.com/bUCFV2h.jpg)

ERD: [ERD](https://i.imgur.com/baqw863.jpg)

Alternate Repo: [API](https://alexkjones.github.io/Stardust-Serpents-API/)

Heroku API: [Deployed Heroku API](https://dashboard.heroku.com/apps/secret-mountain-85824)

Deployed Client-Side Link: [Deployed Client-Side](https://alexkjones.github.io/Stardust-Serpents-Client/#/)

### Included Routes

This template comes with a handful of front-end routes that display
different components for user actions.

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |
|------------------|-------------------|-------|
| `/products`       | `GET`    | No |
| `/create-products`       | `POST`    | Yes |
| `/products/:productId` | `GET`  | Yes |
| `/products/:productId` | `DELETE`  | Yes |
| `/product-update/:productId`        | `PATCH`   | Yes |
|------------------|-------------------|-------|
| `/create-questions`       | `POST`    | Yes |
| `/question/:questionId`       | `GET`    | Yes |
| `/question-update/:questionId` | `PATCH`  | Yes |
| `/question/:questionId`        | `DELETE`   | Yes |


