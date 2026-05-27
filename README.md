[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24016065&assignment_repo_type=AssignmentRepo)

Name: Albert Aranda

## Live URLs

- **Client:** https://assignment8-public-alberuco.vercel.app/
- **Server:** https://platescout-albert.onrender.com/
- **Server health check:** https://platescout-albert.onrender.com/api/health

## Local setup

1. Clone the repo
2. Copy `server/.env.example` to `server/.env` and fill in `MONGO_URI` + `JWT_SECRET`
3. From the root: `npm install` (client) and `cd server && npm install` (server)
4. Two terminals: `npm run dev` (root, client) + `npm run dev` (server)
5. Open http://localhost:5173

## What I learned during deployment
(one paragraph: what surprised you, what took longest to debug, what you'd do differently next time)
What surprised me the most is how easy it is to connect a github repo to both render and vercel to deploy a web app, all I had to do was click connect to github and it showed all my repo's and i just had to connect the public assignment 8 repo. At the same time i feel like deploying took a little longer than i expected in general, i would have assumed before this class deploying would take one button press, but it makes sense to have to deploy the backend with Render and the front end with Vercel separately. There is not much i would do differently, while at first it is confusing having to deploy both front and backend, it feels pretty intuitive now.