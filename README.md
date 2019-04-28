# Ae.Studio Challenge Project

This is an api project using nodejs + express as core. This api is responsible
for calculating all possible moves in two turn of a knight chess piece.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

On your MAC terminal:

```
brew install node
```

Alternatively on Linux:

```
sudo apt-get install nodejs
```

To clone the project:

```
git clone https://github.com/filipealc/ae-test-backend.git
```

### Prerequisites

Install all the required libraries

```
npm install
```

## Running the tests

```
npm run test
```

## Running the application

Run the application:

```
npm run start
```

Sample GET:

```
URL: http://localhost:3000?position=A1
```

## Built With

- [express](https://expressjs.com/) - The Web Framework
- [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
- [mocha](https://mochajs.org/) - The main test framework
- [chai](https://www.chaijs.com/) - The testing library
- [chai-http](https://www.chaijs.com/plugins/chai-http/) - The chai plugin for web requests
- [nodemon](https://nodemon.io/) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

## Authors

- **Filipe de Alcântara** - _The solution architect_ - [Linkedin](https://www.linkedin.com/in/filipealc/)

## License

This project is under the GNU GENERAL PUBLIC LICENSE Version 3 (https://github.com/filipealc/ae-test-backend/blob/master/LICENSE)
