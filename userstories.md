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