# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Wireframe

[HomePage](/images/Home.png)

[MainPage](/images/Main.png)

[AboutPage](/images/About.png)

## Domain Modeling

[Domain Modeling](/images/Domain%20Modeling.png)

## Database Schema Diagram

[Schema](/images/Schema.png)

# User Stories

## PokeTeam Deck Builder

--------

### User Story 1 

#### As a Pokemon card collector, I want to search for Pokemon cards by name of Pokemon.

##### Feature Tasks:

- Create a search box that accepts names of Pokemon as an input
- A carousel render feature to display all images of extant Pokemon cards for a single Pokemon based on the search input
- The search feature shall be input agnostic, not requiring case sensitivity
- STRETCH GOAL: the search feature shall utilize regex to accept misspelled Pokemon names, working correctly if the first and last characters are correct.

##### Acceptance Tests:

- When the user arrives on the main page, a search box is displayed in a clean and understandable format.
- When the user searches for a Pokemon by name, a carousel of Pokemon cards is rendered on the page.
- Invalid search results will display an appropriate error message.
- STRETCH: the carousel automatically rotates.

### User Story 2

#### As a user, I want to be able to select Pokemon cards from the carousel and see basic stats and a full size card image.

##### Feature Tasks:

- Render Pokemon cards in the carousel with preview images from the PokemonTCGapi.
- When a card is selected by the user, a full size image will display.
- The image of the Pokemon will have basic relevant stats: attack, hp, type and weaknesses.
- STRETCH: the cards are ordered in the carousel in terms of rarity.

##### Acceptance Tests:

- The correct Pokemon cards render when the user runs a search for Pokemon.
- The correct relevant stats display adjacent to the card image.
- STRETCH: information card rarity is rendered.

### User Story 3

#### As a user I want the ability to save selected Pokemon as 'favorites' for purposes of deckbuilding.

##### Feature Tasks:

- Add a favorite button to the preview pane of selected Pokemon cards.
- Add a sidepanel to hold a maximum of six favorited Pokemon from the carousel.
- Connect our environment to a MongoDB database to store favorited Pokemon team per user.
- Allow retrieval of favorited team of Pokemon when user first logs in.
- User can select a individual 'favorite' Pokemon to be marked out as a team leader or favorite individual on the team.
- STRETCH: Add multiple save states to account for more than one team per user.

##### Acceptance Tests:

- When the user selects a Pokemon as a favorite, it is rendered as an image in the sidebar preview pane.
- The sidepanel is clickable and has 'remove' and 'favorite' functionality.
- Pokemon saved to the favorites tray will populate a user-specific JSON data set in MongoDB.
- Pokemon saved to the favorites tray will appear the next time the user logs on.
- A PUT request will tag an individual Pokemon as Favorite and render an appropriate icon over that Pokemon's image.
- STRETCH: filters can be selected for sorting multiple Pokemon type.


### User Story 4

#### As a user, I want to know that my Pokemon team is unique to me and cannot be altered by other users.

##### Feature Tasks:

- Add auth0 authentication on login as a requirement to access the site features.
- Utilize unique identifiers for Pokemon selected on a user favorite team and retrieve those Pokemon upon successful login.
- STRETCH: Use auth0 to validate multiple different Pokemon teams per user.

##### Acceptance Tests:

- When logging into the main page with auth0 the user's previous team comes up.
- If the user does not log in with auth0, they are denied access to the main page.
- If the user is logging in for the first time, there will be no saved teams from other users displayed.

### User Story 5

#### As a visitor to the site, I want to see information about the team who made the project.

##### Feature Tasks:

- Build an About Me page with biographical info about the developers.
- Include pictures and a brief bio of each contributor to the project.
- STRETCH: Use Pokemon styled images for each contributor.

##### Acceptance Tests:

- The about-me page is accessible upon login and is of the same style as the rest of the site.
- Professional images and bios are included for each contributor.


# Software Requirements Vision

What is the vision of this product?

- The vision for this project is focused on visualizing Pokemon card game strategies to beat their opponents utilizing the Pokemon TCG API to retrieve the data from the searched pokemon.

What pain point does this project solve?

- Allows users to create a Pokemon dueling strategy while calculating stats

Why should we care about your product?

- You can head into battle with the assurance of a good strategy.

# Scope (In/Out)

## IN - What will your product do

- Users will be able to search for Pokemon.
- The app will allow users to save their favorite Pokemon to their a deck.
- The app will display the stats and information of each searched Pokemon.

## OUT - What will your product not do.

- Pokedeck will not be available for ios or android.
- The user will not be able to update or change the Pokemon stats.
- The user will not be able to link their Pokemon teams to other users.

### Minimum Viable Product

MVP functionality is a basic site that can search the Pokemon TCG API by name for individual Pokemon, which can then be 'saved' to a favorite team of six Pokemon.  That team can then be retrieved when the same user logs on at a later date.

#### Stretch goals

- The search feature shall utilize regex to accept misspelled Pokemon names, working correctly if the first and last characters are correct.
- The cards are ordered in the carousel in terms of rarity.
- Add multiple save states to account for more than one team per user.
- Use auth0 to validate multiple different Pokemon teams per user.
- Use Pokemon styled images for each contributor to the project.
- Utilize Chart.js to render more in depth stats for each Pokemon.

#### Functional Requirements

List the functionality of your product. This will consist of tasks such as the following:

1. A user can search for Pokemon from the Pokemon API.
2. A user can save their favorite Pokemon to a deck.
3. A user can delete the Pokemon from the deck.
4. A user can use the carousel to scroll through pokemon cards.
5. A user can view their saved team on a preview pane sidebar.

## Data Flow

### Home page

1. The user will land on the homepage, consisting of a hero image, search bar, and a login button.

2. If the user clicks on the log in button, they will be prompted to log in with Auth0.

3. If the user searched for a Pokemon, they will be directed to the main page. They will not have the ability to favorite and build a deck unless they are logged in.

4. The nav bar will give the user the ability to navigate to the home, main and about us page.

### Main page

1. From the main page, the user will still have the ability to make additional searches utilizing a search bar.

2. The stats of searched pokemon will be rendered along with the image.

3. The searched pokemon cards will be displayed in the carousel. There are many cards for a single pokemon, the carousel will do the heavy lifting and display them.

4. The nav bar will give the user the ability to navigate to the home, main and about us page.

### About us

1. The user will be able to learn about the developers behind the Pokedeck web application.

2. The nav bar will give the user the ability to navigate to the home, main and about us page.

Non-Functional Requirements (301 & 401 only)

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

1. Game play strategy
2. Data Analytics
3. Usability

Pick 2 non-functional requirements and describe their functionality in your application.

If you are stuck on what non-functional requirements are, do a quick online search and do some research. Write a minimum of 3-5 sentences to describe how the non-functional requirements fits into your app.

Data analytics plays a key role in being able to use our app to plan a pokemon attack. We will be providing data instrumental in winning your battles. The gameplay strategy goes hand in hand with the data analytics, this is the main focus of our web application. The users will have the ability to add and delete pokemon from their pokemon stack giving the users options to create and update their card deck. 