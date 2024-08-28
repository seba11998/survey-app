# Survey Application

This project is a survey application built using NestJS, TypeORM, and AngularJS for the purpose of technical testing. The application allows users to submit surveys about their favorite musical styles and view aggregated results.
## Table of Contents

- [Technical Requirements](technical-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Technical Requirements

- **Node.js**: Version 20.14 or higher
- **MySQL**: Version 8 or higher
- **NestJS**: Version 10.x or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sramosUMayor/survey-app.git
   cd survey-app
   ```

2. Install server dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file or rename the `.env.sample` file in the root directory and add the following:
   ```env
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   ```

4. Run the server:
   ```bash
   npm run start
   ```

5. Navigate to the `encuesta-front` directory and install client dependencies:
   ```bash
   cd encuesta-front
   npx http-client -o
   ```

6. Open `index.html` in your browser to view the application.

## Usage

- **Submit a Survey**: Fill out the survey form with your email and favorite musical style, then click "Enviar Encuesta".
- **View Results**: Click "Ver Resultados" to see the aggregated survey results.

## API Endpoints

### POST /api/survey

Create a new survey entry.

- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "estiloMusical": "Rock"
  }
  ```

- **Response**:
  ```json
  {
    "id": 1,
    "email": "user@example.com",
    "estiloMusical": "Rock"
  }
  ```

### GET /api/survey/results

Retrieve all survey results grouped by musical style.

- **Response**:
  ```json
  [
    {
      "estiloMusical": "Rock",
      "count": 10
    },
    {
      "estiloMusical": "Pop",
      "count": 8
    }
  ]
  ```

## Technologies Used

- **Backend**: NestJS, TypeORM, MySQL
- **Frontend**: AngularJS, Bootstrap
- **Other**: dotenv
