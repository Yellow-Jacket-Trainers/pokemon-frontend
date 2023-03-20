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

- Pokemon cards will render in the carousel with preview images from the PokemonTCGapi.
- When a card is selected by the user, a full size image will display.
- The image of the Pokemon will have basic relevant stats: attack, hp, type and weaknesses.
- STRETCH: the cards are ordered in the carousel in terms of rarity.

##### Acceptance Tests:

- The correct Pokemon cards render when the user runs a search for Pokemon.
- The correct relevant stats display adjacent to the card image.
- STRETCH: information card rarity is rendered.

### User Story 3

#### As an administrative user, I want the ability to modify all employee’s schedules.

##### Feature Tasks:

Admin can choose which users schedules to view/edit
Show the options for all employees schedules
Select ability to have recurring schedules
Save schedule changes

##### Acceptance Tests:

Ensure that the employee the admin picked links to the correct schedule
Ensure the scheduling does not interfere with requested time off
Ensure that the schedules successfully save into database
Provide error message and abort transaction if system becomes unavailable

### User Story 4

#### As an administrative user, I want the ability to modify all employee’s schedules.

##### Feature Tasks:

Admin can choose which users schedules to view/edit
Show the options for all employees schedules
Select ability to have recurring schedules
Save schedule changes

##### Acceptance Tests:

Ensure that the employee the admin picked links to the correct schedule
Ensure the scheduling does not interfere with requested time off
Ensure that the schedules successfully save into database
Provide error message and abort transaction if system becomes unavailable

### User Story 5

#### As an administrative user, I want the ability to modify all employee’s schedules.

##### Feature Tasks:

Admin can choose which users schedules to view/edit
Show the options for all employees schedules
Select ability to have recurring schedules
Save schedule changes

##### Acceptance Tests:

Ensure that the employee the admin picked links to the correct schedule
Ensure the scheduling does not interfere with requested time off
Ensure that the schedules successfully save into database
Provide error message and abort transaction if system becomes unavailable