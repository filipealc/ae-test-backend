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
URL: http://localhost:80?position=A1

Expected Result: ["A1","A3","E1","E3","B4","D4","D2","A5","C1","C5","C2","B3"]
```

## Deployment on AWS

Login in the aws container registry:

```
$(aws ecr --profile your_aws_profile get-login --registry-ids 569001192389 --no-include-email --region us-east-1)
```

Build the image in your local:

```
docker build -f lb_docker_file --tag=569001192389.dkr.ecr.us-east-1.amazonaws.com/ae-challenge-backend:latest .
```

To run locally the image:

```
docker run --name ae-challenge -p 80:80 569001192389.dkr.ecr.us-east-1.amazonaws.com/ae-challenge-backend:latest
```

To stop the locally running container and delete it:

```
docker container stop ae-challenge && docker container rm ae-challenge
```

Push the image to the repository

```
docker push 569001192389.dkr.ecr.us-east-1.amazonaws.com/ae-challenge-backend:latest
```

## Main URLs/Links

- [Production ](http://ae-challenge-backend-prod.us-east-1.elasticbeanstalk.com) - The production enviroment link

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
