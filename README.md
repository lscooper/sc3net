sc3.net
======
## STATUS
In-progress

## WHAT

•Must use ReactJS in some way (even if minimal): update when new posts/comments are created

  

•Must be backed by a MySQL or MongoDB Database with a Sequelize or Mongoose ORM: 1 database needed to store users, 1 database needed to store posts

  

•Must have both GET and POST routes for retrieving and adding new data:creating new posts and grabbing them to display

  

•Must utilize at least two libraries, packages, or technologies that we haven’t discussed: nodemailer, authentication, google photos api

  

•Must allow for or involve the authentication of users in some way: login to site for family

  

## HOW

•Must have a polished frontend / UI

•Must be deployed using Heroku (with Data)

•Must have folder structure that meets MVC Paradigm

•Must meet good quality coding standards (indentation, scoping, naming)

•Must use a Node and Express Web Server

  

## WHY

Contained Scope: Most social media is designed with the intent of connecting people the globe over; SC3.net is designed to connect you with a very small cohort of people.

Chronology: It’s easy to miss important news on Facebook or Twitter, due to algorithms that hide posts and display them out of order.

  

## APP ー ESSENTIALS

Login: Login credentials will be created for immediate family members, and will be checked against a database before the user is allowed to access the site. There should be a button to log out somewhere.

Homepage: There will be a simple homepage with a feed of posts from family members. The posts will be in reverse-chronological order. On the homepage, you can scroll through posts, or make your own.

Posting: Posts must have a text component, and can have images added via the Google Photos API. 

Commenting: Each post should have an expandable comments section. Every user should be able to comment as many times as they wish.Notifications: When any user in a family group posts on the site, every other member of the group should receive a notification email.

User interface: The site should use some of the same assets and a similar layout/color scheme to the original website, to preserve the sense of taking an old website and updating it.

Custom hosting: The site should be hosted on the actual sc3.net, allowing for a non-heroku domain.

  

## APP ー ICEBOX

Creating a user: There should be an option to try and register for the site. This should require entering an email and a message, which will be sent to the administrator of the family group, who may then verify if this person is part of the family group or not. If they are verified, they should receive a new email that allows them to create a password and log in. Alternatively, the family group could have a specific passcode required to attempt to register, which must be entered at account creation. This might be useful for the far-off multiple family implementation.

Optimize mobile version: While the site should function on mobile, due to the very high likelihood of it being built with either Bootstrap or a similar framework, optimizing it should be a low-priority task.

Apple photos integration: This is the absolute lowest priority task, as the user group this is intended for is made entirely of Android users. This should involve allowing users to share images to the site from the Apple cloud in the same way that they do from Google Photos.

Historical site: The website should have an area, not restricted by login, that displays the old site.

  
  

## APP ー FAR FUTURE

Multiple families: There should be an option when creating an account to either create a new family group or create a new user for an extant family group. Creating a new family group makes you the administrator. Each family group should have a unique code to identify it, as well as a unique title which the administrator can create.

Multiple administrators: There should be an ability to re-assign administrator privileges and have multiple users have those privileges at once.

Media uploads: The point of using the Google Photos API is to ensure that no data is being stored in the database that doesn’t need to be stored. When servers and resources allow, the site should allow for photos to be directly uploaded.

  
  
## TECHNOLOGIES
[nodemailer](https://nodemailer.com/about/)

[google photos](https://developers.google.com/photos/library/guides/overview)

[wireframes](https://balsamiq.cloud/suqlcpf/piiaih4)

[deployed version](https://cryptic-anchorage-12361.herokuapp.com/)

