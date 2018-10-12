### Link to my site [here](https://rebeccahom.github.io)

# Author
Rebecca Hom

# Built With
* React
* React Router
* TypeScript
* create-react-app [here](https://github.com/wmonk/create-react-app-typescript)

# Run locally
1. Download or clone the repo
2. Install dependencies via `npm install`
3. Run via `npm run start`

# Known Issues
* About and Portfolio pages don't show info

# Bug Tracker
* Page had unnecessary scroll bars
    * Problem: Home page had scroll bars horizontally and vertically, although no extra content was being shown/hidden
    * Solution: Inspected page and fixed P5 canvas + height
 * Background doesn't work with other pages
   * Problem: Styles weren't adjusted for other pages so the P5 background sketch wasn't displaying in the back properly
   * Solution: Added `position` and `z-index` properties to the CSS styles of the other pages
