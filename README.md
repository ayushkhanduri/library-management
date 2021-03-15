# Library Management

This is a library management system with JSON database using lowdb as an ORM. The backend and frontend is written in TYPESCRIPT. It uses React as a UI framework to render components. Has a gimmicky pagination, infinite scroll , live search on the UI with Redux being used to store the state of the app.

## How to run the project

Well there are 2 ways. For People using docker

```
git clone project
docker-compose up
// UI would be up on localhost:3000 and backend would be on localhost:5000
// http://localhost:5000/api/health/check to check is backend is up
```

For the basic

```
git clone project
cd ./library-backend
npm install 
npm run start
cd ../
cd ./library-ui
npm install
npm run start
```