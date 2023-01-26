/* 
  Magnum TV is a new service that will revolutionize the way
  people watch television. Here's what the business team has
  hired us to do. As users are added to the system, they will
  tell us what their favorite genre of show is (comedy, action,
  thriller, etc...). The web application must list all of the 
  shows that are on our service, and then also list each user.

  For each user, list all of the shows that we recommend they
  watch based on their recorded favorite genre.


  Requirements:
    * Have an array of users who watch TV. Each user will have
        a name, an age, and favorite genre.
    * Have an array of TV shows. Each show will have a title,
        star actor name, genre, and original air date.
    * Have an array of all possible genres.
    * When displaying users, show their name as a header, and
        all recommended shows underneath.
    * When displaying shows, show the title, genre name, and
        star actor for the show.
*/

/*
algorithm:
Need to build a database
    -3 arrays: users, shows, genres
Creating an ERD for how information relates may be helpful.
Create a getter function in database.js to export each array
Create modules for each array and import .map of each array
Invoke the getter functions and assign to variables
Create and export functions that iterate each array and places in
    proper HTML format (i.e. lists). We will need:
    1. Actor list 
    2. Show list
    3. Watchlist
Set up the overall HTML structure in main.js with a #main-container id
Import necessary functions to main.js
Use .querySelector to target the #main-container id
*/

//  ERD: https://dbdiagram.io/d/63d00fcc296d97641d7bd1b5
//  Wireframe: https://www.figma.com/file/eFMFr722dp3BKBIOgLC2qV/Untitled?node-id=0%3A1&t=cfl6f1wHOBx0AghF-1