# aniTracker
[AniTracker](https://anitrackers.netlify.app/)

## Project Description

The project will be using react to make an app that tracks what a user watches pretaining to anime. The user will be able to navaigate a home page that list the genre of anime and be able to click the banner images to go to the genre page of the specific genre. The user will then have the list of anime they have watched in card style. The user will then be able to click on the anime there will be a button to edit, add or delete the anime. 

## Wireframe

![image]()
## Component Hierarchy
![image]()

##API 
The api will be used to obtain name of the anime, episode the person is on, genre of anime, rating, watch status, and link to anime.
```
"records": [
        {
            "id": "rec0Pp3hG8tJClaDe",
            "fields": {
                "Name": "Jujutsu kaisen",
                "Episodes": "24",
                "genre": "Shonen",
                "rating": 5,
                "watchstatus": "Completed",
                "linktoanime": "https://animixplay.to/v1/jujutsu-kaisen-tv"
            },
            "createdTime": "2021-08-19T18:26:32.000Z"
        },

```


#### MVP 
- Create components for each page of website/app
- Be a working, interactive React app, built using create react app
- Make an edit possible for existing anime as well as push new anime to api
- Have at least 6 separate, rendered components.
- Be able to move from one page to another
- Transfer data from one page to another and display it on page
- Make react banners for each anime and genre
- styling and images


#### PostMVP  
- React Responsive Carousel
- bring in my very own logo to the site
- add a trailer to anime people choose

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|August 20| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|August 21-22| Work to make app.js and have it redner data and make each page link from home, to genre,to individual anime, and anime | Incomplete
|August 23| Render data to each page and still work on the linking | Incomplete
|August 24| Make react banners and styling | Incomplete
|August 25| MVP | Incomplete
|August 26| Post-MVP/Advanced CSS touch ups | Incomplete
|August 27| Presentations | Incomplete


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create react app and add axios and react-router-dom| H | 0.5hr| 0.5hrs | 0.5hrs |
| Connect api to the react app and encode the api key make sure it works| H | 2hrs| 2hrs | 2hrs |
| Retrieve data and test to see the data connects | H | 3hrs| 3hrs | 2.5hrs |
| Make routes from one page to the next| H | 2.5hrs| 2.5hrs | 2.5hrs |
| Make edit page and make sure it pushes and the data to the api | H | 4hrs| 4hrs | 4hrs |
| Add event listeners so I can go from one page to the next| H | 5hrs| 5hrs | 2.5hrs |
| Testing | M | 3hrs| 3hrs | 3hrs |
| Debugging | H | 3hrs| 2.5hrs | 2.5hrs |
| delete data when a new search is made| H | 3hrs| 3hrs | 2.5hrs |
| Add css styling to website | M| 4.5hrs| 4.5hrs | 4.5hrs |
| deploy website | H | 1hrs| 1hrs | 1hrs |
| Total | H | 40hrs| 40hrs | 5hrs |


