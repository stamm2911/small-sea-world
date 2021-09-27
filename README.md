# Small Sea World

 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description
```md
Custom 2D sea world with real-time data were you can not only add land, but also create your own personalized islands.

An island is a collection of cells that are filled and connected in the X or Y axis (Not diagonally).

The real-time data consist in 2 counters (Land Cells & Total Islands):
- Land Cells: Displays the total green land cells in the grid
- Total Islands: Displays the amount of islands in the grid
```

## Table of Contents
- [Deployed App](#deployed-app)
- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contribute](#contribute)
- [Questions](#questions)
## Deployed App
https://stamm2911.github.io/small-sea-world/
![Deployed application](/src/img/deployed-app.JPG)

## Usage
```md
GIVEN a blue grid that represents the sea world, with Height and Width options, and a land and islands counters
WHEN I increse the Height
THEN a new row is added to the sea grid
WHEN I decrease the Height
THEN a row from the sea grid is removed
WHEN I increse the Width
THEN a new coloumn is added to the sea grid
WHEN I decrease the Width
THEN a coloumn from the sea grid is removed
WHEN I click in a blue cell
THEN it changes to a green land cell, and both the land and islands counters are automatically updated
WHEN I click in a green land cell
THEN it changes to a blue cell, and both the land and islands counters are automatically updated
```

## Installation
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## License
© Licensed under the MIT License
## Contribute

In general, we follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Commit changes to your own branch
4. Push your work back up to your fork
5. Submit a Pull request so that we can review your changes
NOTE: Be sure to merge the latest from "upstream" before making a pull request
## Questions
Contact me:

- GitHub: [stamm2911](https://github.com/stamm2911)

- Email: edstamm29@gmail.com


