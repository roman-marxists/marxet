# Marxet
A platform for trading goods &amp; services


## Introduction
This is the front-end client for our 2 week-long sprint, during which our team has built an MVP for an external client.


## Meet _Marxet_
While there are many platforms and websites that allow people to sell goods & services for money, the market is severely lacking a solution for those who wish to buy and sell their trade. Our solution to this is **Marxet**, an online platform on which users can trade goods & services.

On _Marxet_, users can create postings for the goods or services that they are willing to sell, as well as search through postings created by other users. It brings power back to the people, allowing themselves and not the "free market" to define their prices.


## Tech stack
Because we only had ten days to build _Marxet_, we chose to use a mix of familiar dependencies we've worked with for weeks and new technologies that are easy to use and come ready to use out of the box.

We'll be using **React** to build the client, **Express** for our server, and **MongoDB** for our database (located in another repository).
Alongside these, our new technologies are:

- **Firebase** for our login and authentication processes
- **MaterialUI** in conjunction with **styled-components** because it's an easy-to-use styling library that has produced beautiful, modern websites.
- **Next.js** for its React server-side rendering capabilities, routing, and ability to serve static websites. It's a simple and well-documented tool for routing, as well.
- Lastly, we used **Vercel** to deploy our client and [API](https://github.com/roman-marxists/marxet-api).


## Repository setup
### Firebase environment
1. Create file `.env.local` in root directory. You can copy and rename from the `.env.local.example` file
2. Add the following variables to the `.env.local` file
   `NEXT_PUBLIC_FIREBASE_API_KEY=<your api key>`
   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your firebase app domain>`
   `NEXT_PUBLIC_FIREBASE_APP_ID=<firebase app id>`
   `NEXT_PUBLIC_FIREBASE_PROJECT_ID=<firebase project id>`
   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<firebase storage bucket>`
   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<firebase messaging id>`
   `NEXT_PUBLIC_API_URL=<api server endpoint>`

## Technical challenges
### Truly starting from scratch
_Marxet_ was given to us by our client as nothing but a concept-He wanted a cashless bartering platform where users can list, buy, and negotiate on offeredgoods & services. That was all we were given.

As a result, the team had to consider a lot of UI/UX principles, and we often had to put ourselves in the consumer's shoes. As a user looking to purchase something on the platform, what is the smoothest, easiest way to get from viewing the listing to making an offer for it? How would you want to list your own goods or services? How would we encourage & enforce equitable business practices? How would _Marxet_ guarantee transaction integrity or location security? 

It was a very tedious process of accounting for varying future circumstances, and the only way we could manage it was by creating several very-detailed wireframes. Even so, after all that planning, there were a few instances where a team member would bring up an important feature that we hadn't even considered, and we'd be back at the drawing board figuring out where that would fit into the website we had so far.

Here's an example of one such wireframe:
<img width="1177" alt="Screen Shot 2021-12-17 at 4 13 01 PM" src="https://user-images.githubusercontent.com/47910950/146608698-27f42e86-9899-4294-9443-b750bbcb0810.png">


## Demos: Application functionality
_What happens behind the scenes when the user interacts with it?
Where are all the places that the data travels?
What happens to that data?
How does the tech stack come together?_

### Secure log-in
Thanks to Firebase, users can log in and sign up using their e-mail address or Google account. Once logged in, they'll immediately have access to all features that _Marxet_ has to offer.

### A personalized user profile
Each user has their own customizable user profile. They can create their biography, view their listings, add goods and services to their wishlist, and show off any reviews that other users have left for them.

### A Search page for browsing local listings, filtered by location

<img width="1421" alt="Screen Shot 2021-12-17 at 4 24 16 PM" src="https://user-images.githubusercontent.com/47910950/146609704-9e91a795-33f6-4c4f-b7a9-41f69ce88c72.png">


### Creating your own listings
Each listing is uploaded with a picture and appropriate details on the side. There are also buttons that allow users to `View seller` or `Make an offer`.
<img width="1440" alt="Screen Shot 2021-12-17 at 4 14 43 PM" src="https://user-images.githubusercontent.com/47910950/146608939-4026380b-865c-4539-bbf7-00a4c6fdc5fd.png">

### Making trade offers & bartering
Clicking the `Make an offer` button takes you to this modal window, where you may select any number of your current listings to offer up as a trade.

<img width="1440" alt="Screen Shot 2021-12-17 at 1 42 07 AM" src="https://user-images.githubusercontent.com/47910950/146608953-ad3e0d4f-162b-468b-88cc-628da1631c80.png">


Once you send the offer, the button updates to alert the user that the offer was successfully sent.

<img width="1440" alt="Screen Shot 2021-12-17 at 1 42 24 AM" src="https://user-images.githubusercontent.com/47910950/146609046-efc3e1da-70af-4363-a89f-9b11db1be054.png">


## Workflow & key takeaways
This project has taught us that constant and concise communication is the key to efficiently building something.
In order to streamline this workflow, we chose to use **GitHub Projects** instead of Trello boards because we prefer its integrated features, such as linking code blocks to related tickets.
You can view our ticket board [here](https://github.com/roman-marxists/marxet/projects/1).


## Future updates


Fin
