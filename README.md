<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Installation
- Download project `https://github.com/sorduz98/BDB-3-backend.git`
- Install dependencies: `npm install`

```bash
$ git clone https://github.com/sorduz98/BDB-3-backend.git
$ cd BDB-3-backend
$ npm install
```

## Running the app

Run the app on dev server pointed to remote DB: 
- Run project: `env=prod npm run start:dev`.  Once the application is running, open your browser and navigate to `http://localhost:3000/docs`.
```bash
$ env=prod npm run start:dev
```

Run the app on dev server pointed to local DB: 
- Build docker containers: `docker-compose up -d`
- Run project: `npm run start:dev`.  Once the application is running, open your browser and navigate to `http://localhost:3000/docs`.
```bash
$ docker-compose up -d
$ npm run start:dev
```

## Related
> Frontend (Angular):  `https://github.com/sorduz98/BDB-3-frontend`
