(Doing Role Based Project Development)

- src/
    - config/ (to store database configuration)
    - controllers/
    - middlewares/
    - models/
    - repository/
    - services/
    - util/ (extra utility functions, helper functions)
    - index.js (main server file)
- tests/ [will be created later]
- static/

- Will be deploying project later, at that time uploading tests folder will create extra burden on server...therefore making seperate folders

- Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of downloaded project 
- Create a `.env` file in root directory and add following environment variables :
    - `PORT = 3000`
- Inside `src/config` folder create `config.json` file then add following code :

```
{
  "development": {
    "username": "YOUR_DB_USERNAME",
    "password": "YOUR_DB_PASSWORD",
    "database": "Flights_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
