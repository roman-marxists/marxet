# Marxet
A platform for trading goods &amp; services


## Introduction
This is the front-end client for our 2 week-long sprint, during which our team has built an MVP for an external client.


## Meet _Marxet_
While there are many platforms and websites that allow people to sell goods & services for money, the market is severely lacking a solution for those who wish to buy and sell their trade. Our solution to this is **Marxet**, an online platform on which users can trade goods & services.

On _Marxet_, users can create postings for the goods or services that they are willing to sell, as well as search through postings created by other users. It brings power back to the people, allowing themselves and not the "free market" to define their prices.


## Tech stack
Because we only had eight days to build _Marxet_, we chose to use a mix of familiar dependencies we've worked with for weeks and new technologies that are easy to use and come ready to use out of the box.

We'll be using **React** to build the client, **Express** for our server, and **MongoDB** for our database (located in another repository).
Alongside these, our new technologies are:

- **Firebase** for our login and authentication processes
- **MaterialUI** in conjunction with **styled-components** because it's an easy-to-use styling library that has produced beautiful, modern websites.
- **Next.js** for its React server-side rendering capabilities, routing, and ability to serve static websites. It's a simple and well-documented tool for routing, as well.
- Lastly, we used **Vercel** to deploy our client and [API](https://github.com/roman-marxists/marxet-api).


## Repository setup
### Firebase environment
1. Create file `.env.local` in root directory. You can copy and rename from the `.env.local.example` file
2. Add the following variables to the `.env.local` file by copying and pasting the following lines:

   `NEXT_PUBLIC_FIREBASE_API_KEY=<your api key>`
   
   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your firebase app domain>`
   
   `NEXT_PUBLIC_FIREBASE_APP_ID=<firebase app id>`
   
   `NEXT_PUBLIC_FIREBASE_PROJECT_ID=<firebase project id>`
   
   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<firebase storage bucket>`
   
   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<firebase messaging id>`
   
   `NEXT_PUBLIC_API_URL=<api server endpoint>`

3. Double and triple check that **`.env.local` is included in your `.gitignore`**. This is very important.


## Technical challenges
### Truly starting from scratch
_Marxet_ was given to us by our client as nothing but a concept-He wanted a cashless bartering platform where users can list, buy, and negotiate on offeredgoods & services. That was all we were given.

As a result, the team had to consider a lot of UI/UX principles, and we often had to put ourselves in the consumer's shoes. As a user looking to purchase something on the platform, what is the smoothest, easiest way to get from viewing the listing to making an offer for it? How would you want to list your own goods or services? How would we encourage & enforce equitable business practices? How would _Marxet_ guarantee transaction integrity or location security? 

It was a very tedious process of accounting for varying future circumstances, and the only way we could manage it was by creating several very-detailed wireframes. Even so, after all that planning, there were a few instances where a team member would bring up an important feature that we hadn't even considered, and we'd be back at the drawing board figuring out where that would fit into the website we had so far.

Here's an example of one such wireframe:

<img width="1177" alt="Screen Shot 2021-12-17 at 4 13 01 PM" src="https://user-images.githubusercontent.com/47910950/146608698-27f42e86-9899-4294-9443-b750bbcb0810.png">

These wireframes greatly assisted us in developing these pages, as evidenced by how the login / signup page eventually turned out:

<img width="1440" alt="Screen Shot 2021-12-17 at 4 28 49 PM" src="https://user-images.githubusercontent.com/47910950/146610131-73d9d107-a353-42da-9478-6586a4ecf67e.png">


### Free reign of design
Designing our website's color scheme also took a while, but we ultimately decided on this:

<img width="357" alt="Screen Shot 2021-12-17 at 4 26 23 PM" src="https://user-images.githubusercontent.com/47910950/146609943-fd956904-6394-4851-84b0-c7cf2453b469.png">

### Learning how to use & design our API around Firebase
Firebase might be simpler to pick up, but there's still a learning curve. We used this web sequence diagram to orient ourselves.

<img width="727" alt="Screen Shot 2021-12-17 at 4 12 11 PM" src="https://user-images.githubusercontent.com/47910950/146610048-48f01bca-8e56-4658-bdea-a335e54883af.png">


## Demos: Application functionality
### Secure log-in
Thanks to Firebase, users can log in and sign up using their e-mail address or Google account. Once logged in, they'll immediately have access to all features that _Marxet_ has to offer.

A capture of the login / signup page is available above.


### A personalized user profile
Each user has their own customizable user profile. They can create their biography, view their listings, add goods and services to their wishlist, and show off any reviews that other users have left for them.

### A Search page for browsing local listings, filtered by location
The user may _Favorite_ a listing, which adds it to their personal Favorites list, or _Watch_ the item in case the lister updates it or supplies more items that they would be willing to trade for.

<img width="1083" alt="Screen Shot 2021-12-17 at 6 40 54 PM" src="https://user-images.githubusercontent.com/47910950/146619902-278d38c3-b284-4f52-afc9-8c00d1699de0.png">


### Creating your own listings
Each listing is uploaded with a picture and appropriate details on the side. There are also buttons that allow users to `View seller` or `Make an offer`.

<img width="1440" alt="Screen Shot 2021-12-17 at 6 28 17 PM" src="https://user-images.githubusercontent.com/47910950/146619720-1e498302-541f-40ba-8959-f645d303753e.png">


### Making trade offers & bartering
Clicking the `Make an offer` button takes you to this modal window, where you may select any number of your current listings to offer up as a trade.
Once you send the offer, the button updates to alert the user that the offer was successfully sent.

Unfortunately, if you haven't got any listings posted and the listing isn't free, you won't be able to send an offer.

<img width="1440" alt="Screen Shot 2021-12-17 at 4 59 39 PM" src="https://user-images.githubusercontent.com/47910950/146617530-c53a02d1-dd5a-453b-a150-fcac5e61faf7.png">


## Workflow & key takeaways
This project has taught us that constant and concise communication is the key to efficiently building something.
In order to streamline this workflow, we chose to use **GitHub Projects** instead of Trello boards because we prefer its integrated features, such as linking code blocks to related tickets.
You can view our ticket board [here](https://github.com/roman-marxists/marxet/projects/1).


## Future updates
### Users may attach more than one photo to describe their listing.
Why have one when you can have four? Or six? Or whatever is enough to get your listing out there.

### Consumers may leave public reviews & ratings on listings 
These reviews & ratings will be added to the individual listing page beneath the photos and listing information. This will greatly improve users' browsing experience and decision-making when it comes to trading.

### Amping up the geolocation

### Fine-tuning the search feature
Not only will the Search results render more responsively, but there will also be a discrete sticky button anchored on the left side of the screen.
Users can click this button to be sent back to the top of the screen so they can more easily access the Search bar.

### Greater user customization across all of _Marxet_
Dark mode soon, we promise!


# Fin
### If you've read til here, we want to extend a very warm thank you for supporting _Marxet_. We hope that you continue to support us, and that you enjoy the updates and new features coming soon.
