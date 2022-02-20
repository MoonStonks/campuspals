# CampusPals 
CampusPals powers your search needs for tutors and clubs at your university! Explore, Discover, and Connect with fellow students at your university and local tutors at your campus!

Devpost: https://devpost.com/software/campuspals

## Inspiration
CampusPals (https://campus-pals.vercel.app/) was inspired by the lack of a centralized page for searching for university clubs. Unfortunately, for UBC, the club website is down and doesn't even exist now (rip). As for SFU, we found the current UI outdated as seen here (https://go.sfss.ca/clubs/list).

With CampusPals, anyone can easily search and discover new clubs, and new tutors by the university. Having a directory of clubs and tutors in one place both enhances the university student gig-economy as well as centralized all the information in one place. Our goal is to modern the club search and tutor search experience and streamline the entire process to be as simple as possible. 

## What it does
CampusPals is a one-stop shop for student associations, clubs, and tutor services localized to your selected university! It is meant to enable easy access and browsing for club search and the search for tutors. 

Clubs and tutors can create new postings and advertisements with the option to select tags. Users can easily search multiple tags or keywords to find their clubs of interest. This centralized aggregation of data enables university resources to be localized to specific university pages which allows students to easily access them. In the future, we plan to extend the functionality to add more university-specific info dumps which include blind friend matching, 

## How we built it
We built it in Next.js, React, MongoDB, Chakra UI, Express.js, Node.js, Vercel, and Python. 

We built a python web scraper to get our initial data from https://go.sfss.ca/clubs/list for the SFU clubs. (Again, UBC clubs is down lol).   We parsed the data into a json file which we uploaded to our MongoDB cluster. We deployed a backend Express.js server with an API that had endpoints to do some CRUD functions.

For our frontend, we built it using React, Node, Next.js, Chakra UI and deployed it via Vercel.

## Challenges we ran into
CSS is the bane of our existence. Design and figure out how we should lay the components with good user UI and accessibility in mind. 

## Accomplishments that we're proud of
We are proud of our design, shipping our product successfully, and connecting all components (scraper, database, backend, frontend) together successfully. We also finished early so we can sleep earlier.

## What we learned
- Next.js
- Design is hard
- CSS is hard
- Routing in Next.js


## What's next for CampusPals
We intend to implement the following in the future:
- Onboard more campuses to the platform
- Admin management tools / CMS tools for club verified accounts
- Profile pages for tutors 
- Subscription services with Twilio for notifications of new postings

## Related repos
- Express Backend Codebase - https://github.com/MoonStonks/campuspals-db
- Python webscraper - https://github.com/MoonStonks/campuspals-scraper-sfu

