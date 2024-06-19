# Book Search Application

This is a book search application built with React, TypeScript, and Next.js. The application allows users to search for books, add them to a reading list, and view the reading list. The application uses Redux for state management and Material UI for the user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
- You have a Linux machine. This project was built using a Linux operating system.
- You have installed [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable).

### Installing

To install the project, follow these steps:

1. Install the packages:
```
yarn install
```

2. Run the the backend application

```
cd ../backend

npm install

npm start
```

3. Run the frontend application and test

Run tests with UI:

```
yarn cypress open
```

Run test without UI:

```
yarn cypress run
```

```
cd ../frontend
yarn dev
```
