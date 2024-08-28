# Encuesta App

A survey application built with NestJS, TypeORM, and MySQL.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd encuesta-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Set up the environment variables. Create a `.env` file in the root directory and add the following:
   ```dotenv
   DB_HOST=
   DB_PORT=
   DB_USERNAME=
   DB_PASSWORD=
   DB_DATABASE=
   ```

2. Start the application:
   ```bash
   npm run start
   ```

3. The application will be available at `http://localhost:3000`.

## Project Structure

- `src/`: Source code
    - `modules/`: Application modules
        - `survey/`: Survey module
        - `results/`: Results module
        - `database/`: Database module
    - `main.ts`: Entry point of the application
    - `app.module.ts`: Root module of the application
- `test/`: Test files
- `.env`: Environment variables file
- `package.json`: Project configuration and dependencies

## Frontend

The frontend of the application is built using AngularJS.

### Structure

- `encuesta-front/`: Frontend source code
    - `index.html`: Main HTML file
    - `app.js`: AngularJS application logic
    - `css/`: Stylesheets
    - `vendor/`: Third-party libraries

### Running the Frontend

1. Navigate to the `encuesta-front` directory:
   ```bash
   cd encuesta-front
   ```

2. Open `index.html` with a static http server.

   ```bash
   npx http-server -o
   ```

### Dependencies

- AngularJS
- Bootstrap
- Font Awesome
- jQuery
- Select2
- Tilt.js

### Styles

- `css/util.css`: Utility styles
- `css/main.css`: Main styles

### Scripts

- `app.js`: AngularJS application logic
- `vendor/jquery/jquery-3.2.1.min.js`: jQuery library
- `vendor/bootstrap/js/popper.js`: Popper.js library
- `vendor/bootstrap/js/bootstrap.min.js`: Bootstrap library
- `vendor/select2/select2.min.js`: Select2 library
- `vendor/tilt/tilt.jquery.min.js`: Tilt.js library




