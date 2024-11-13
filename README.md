# Strictly Ballroom Web Application

## Description

This project is a full-stack web application designed to manage dance event bookings and showcase the space at Strictly Ballroom, a successful dance studio in Utah. The application simplifies the process of scheduling and booking studio time, while also providing an online presence to showcase the studio's offerings. Users can view event calendars, book studio time, and access the studio's Instagram feed directly from the website.

## Key Learnings

- **Interactive Full-Stack Application**: Gained experience in building a comprehensive, interactive full-stack web application using modern web technologies.
- **Defined GET and POST Routes**: Implemented efficient GET and POST routes for data retrieval and submission.
- **API Integration**: Integrated various APIs, including Google Calendar and Instagram Basic Display, to enhance functionality.
- **PostgreSQL & Sequelize ORM**: Utilized PostgreSQL and Sequelize for robust data storage and management.
- **MVC Structure**: Followed the Model-View-Controller (MVC) architecture to maintain a clean, organized codebase.
- **Security**: Implemented security measures like Helmet for securing HTTP headers and bcrypt for securing sensitive data.

## Challenges Faced

- **Instagram Integration**: Faced issues with not having the client's login for the API key and encountered challenges with Meta's policies.
- **Merge Conflicts**: Dealt with merge conflicts, including an incident where the `package.json` file was deleted.
- **Error Handling**: After implementing GitHub authentication, we had to refactor the fetch and format functions to handle errors properly.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To use this application, you must have Node.js installed. Before running the application, install the necessary dependencies by typing `npm install` into the terminal.

## Usage

Site is deployed on Render at https://strictly-ballroom.onrender.com/

1. **Ensure Node.js is Installed**: Confirm that Node.js is installed on your computer. If not, download and install it from the official Node.js website.

2. **Install Dependencies**: Navigate to the project folder in your command-line interface and run the following command to install the necessary dependencies:
   ```
   npm install
   ```

3. **Modify .env.EXAMPLE**: Update this file with your PostgreSQL username and password, and ensure that the database name is set to `db_strictly_ballroom`.

4. **Run the Application**: Start the server by typing:
   ```
   node server.js
   ```

5. **Navigate to the URL**: Open your browser and go to the following URL: [http://localhost:3001/](http://localhost:3001/).

6. **Create a New Account**: Create a new account by entering your email and password on the login page.

   - Your password must be more than 8 characters to be accepted.
   - Your email must follow a standard email format.

7. **Login and Explore**: Log in and explore the features of the site, including the event calendar, booking options, and Instagram feed.

## Contributing

Technologies used in this project include:
- JavaScript
- Node.js
- Express.js
- Handlebars
- PostgreSQL
- Sequelize
- APIs (Google Calendar, Instagram Basic Display)

## License

This project is licensed under the MIT License.

## Tests

No tests are required for this application.

## Questions

For any questions, please contact us directly. Our GitHub accounts are listed below:

- [Hannah](https://github.com/hannahpsmith)
- [Travis](https://github.com/Travisgage)
- [Boden](https://github.com/Acid0000)
- [Robert](https://github.com/rp192w)