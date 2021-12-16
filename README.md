# Marxet

A platform for trading goods &amp; services

## Introduction
This is the front-end for our 2-week sprint during which our team has built an MVP for an external client.

## Meet _Marxet_

While there are many platforms and websites that allow people to sell goods & services for money, the market is severely lacking a solution for those who wish to buy and sell their trade. Our solution to this is **Marxet**, an online platform on which users can trade goods & services.

On Marxet, users can create postings for the goods or services that they are willing to sell, as well as search through postings created by other users. It brings power back to the people, allowing themselves and not the "free market" to define their prices.

## Tech stack

Because we only have ten days to build Marxet, we chose to use a mix of simple dependencies we've worked with for weeks and new technologies that are easy to use and come ready to use out of the box.

We'll be using **React** to build the client, **Express** for our server, and **MongoDB** for our database (located in another repository).
Alongside these, our new technologies are:
  - **Firebase** for our login and authentication process
  - **MaterialUI** in conjunction with **styled-components**
    MUI is an easy-to-use styling library that has produced beautiful, modern websites- the kind of website our client has specifically requested.
  - **Next.js** for its React server-side rendering capabilities and its ability to serve static websites. It's a simple and well-documented tool for routing, as well.
  - **Docker** to keep our database environment consistent across all of our developers' local machines
  - Lastly, we plan to use **AWS**'s EC2 instances to deploy our Dockerized application & database

- **Firebase** or **Auth0** (TBD) for our login and authentication process
- **MaterialUI** in conjunction with **styled-components**
  MUI is an easy-to-use styling library that has produced beautiful, modern websites- the kind of website our client has specifically requested.
- **Next.js** for its React server-side rendering capabilities and its ability to serve static websites. It's a simple and well-documented tool for routing, as well.
- **Docker** to keep our database environment consistent across all of our developers' local machines
- Lastly, we plan to use **AWS**'s EC2 instances to deploy our Dockerized application & database

## Technical challenges & research that you anticipated

## Technical challenges & research that were unexpected

## Video demos & walkthroughs of Marxet

## Application functionality

_What happens behind the scenes when the user interacts with it?
Where are all the places that the data travels?
What happens to that data?
How does the tech stack come together?_

## Research

## Workflow & key takeaways
This project has taught us that constant and concise communication is the key to efficiently building something.
In order to streamline this workflow, we chose to use **GitHub Projects** instead of Trello boards because we prefer its integrated features, such as linking code blocks to related tickets.
You can view our ticket board [here](https://github.com/roman-marxists/marxet/projects/1).

## Any non-MVP tickets?

## Notes from your sprint retrospectives

## Additional features coming in the future

# Getting Started

## Firebase setup

1. Create file `.env.local` in root directory. You can copy and rename from the `.env.local.example` file
2. Add the following variable to the`.env.local` file
  `NEXT_PUBLIC_FIREBASE_API_KEY=<your api key>`
  `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your firebase app domain>`
  `NEXT_PUBLIC_FIREBASE_APP_ID=<firebase app id>`
  `NEXT_PUBLIC_FIREBASE_PROJECT_ID=<firebase project id>`
  `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<firebase storage bucket>`
  `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<firebase messaging id>`
  `NEXT_PUBLIC_API_URL=<api server endpoint>`


Fin
