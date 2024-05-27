# HappeningTN

![Logo](logo.jpeg)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

## About HappeningTN
HappeningTN is a local event listing platform designed to connect people in Tunisia with the latest events, workshops, and cultural activities in their vicinity. Our mission is to foster community engagement and cultural exchange by making it easier for everyone to discover and participate in local events.

## Key Features
- **Event Discovery**: Browse a wide range of events based on categories and interests.
- **User Registration**: Sign up to attend events and receive notifications.
- **Event Management**: Event organizers can create and manage their event listings.
- **Interactive Map**: View events plotted on a map for easy location-based browsing.

## Technology Stack
- **Frontend**: HTML, CSS, JavaScript (React.js/Vue.js)
- **Backend**: Node.js/Express.js or Python/Django
- **Database**: MongoDB/PostgreSQL
- **Hosting**: Heroku/Netlify

## Getting Started
To get started with HappeningTN, clone the repository and follow these steps:
1. Navigate to the `backend` directory and install dependencies:
```bash
cd backend npm install
```

2. Start the backend server:

```bash
npm start
```

3. Navigate to the `frontend` directory and install dependencies:
```bash
cd …/frontend npm install
```

4. Start the frontend development server:
```bash
npm start
```

### Monorepo tech-stack

a monorepo using pnpm with the front-end and the back-end of the app inside

## Frontend

apps/web

**Typescript:** Language

**NextJS:** React SSR framework

**Ant Design:** Beautiful design system

## Backend

apps/server

**Node.js:** Environment

**Typescript:** Language

**NestJS:** Node.js framework

**TypeORM:** Database ORM

**PostgreSQL:** Relational database


### architecture

The front-end is built using a beautiful design system called Ant Design. This includes a full library of pre-built components that can easily drop into the application, containing everything from card and tables to self-validating forms, modals and notification.

The front-end is built in TypeScript.
##File structure
```bash
/src
  /app          → the pages of your app
  /designSystem → the theme/style of your app
  /layouts      → the topbar/leftbar present in all your pages
  /domain       → the data models and calls to the API
  /store        → the global state of your app
```

## Environment Variables

| KEY | DEFAULT | DESCRIPTION |
| :---| :------ | :---------- |
| WEB_PORT | 8099 | Application port |
| :------- | :--- | :--------------- |
| NEXT_PUBLIC_API_BASE_URL | http://localhost:3099 | Server url |

## App

```bash
/app
  /(authenticated)
    /home
      page.tsx
    /tweets
      /[id]
        page.tsx
    /profile
      page.tsx
  /(non-authenticated)
    /login
      page.tsx
    /register
      page.tsx
```

## Design System

HappingTN uses Ant Design as a design system library.

## Domain

That's where the data models and the API interactions with the back-end live.
```bash
/domain
  /authentication
  /user
  /tweet
    tweet.api.ts
    tweet.model.ts
```
tweet.api.ts
```Typescript
export namespace TweetApi {

  export function findMany(
    queryOptions?: ApiHelper.QueryOptions<Tweet>
  ): Promise<Tweet[]> {

    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.get(`/v1/tweets${buildOptions}`)

  }
  ...
```
So if I wanted to fetch all the tweets in my app I would simply do:
```Typesricpt
import { Api, Model } from '@web/domain'

const tweets = await Api.Tweet.findMany()
```

## Contributing
We welcome contributions to HappeningTN! If you have suggestions or want to contribute code, please feel free to make a pull request or open an issue.

## License
HappeningTN is open source and available under the MIT License.

## Contact
For any queries or feedback, please reach out to [sassihamdi777@gmail.com].

## Acknowledgments
A special thanks to everyone who has contributed to making HappeningTN a reality.
 
