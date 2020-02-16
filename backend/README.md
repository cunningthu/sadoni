To start server: nodemon server

Steps to reproduce backend:
In the terminal in the backend folder:
1. npm init -y
2. install express cors mongoose dotenv
3. npm install -g nodemon


Express -  a lightweight and fast framework for Node.js

cors - cross origin resource sharing
    Allows AJAX requests to skip the same origin policy
    and access resources from remote hosts
    The cors package provides an express MIDDLEWARE
    that can enable cors with different options
    so we can access something outside of our server
    from our server
MIDDLEWARE - allow our server to send and receive (JSON)

Mongoose - Allows interacting with MongoDB through Node.js simpler

dotenv - Loads environment variables from a .env file into process.env
    Instead of installing environment variables on our development machine, they can be stored in a file */

Nodemon is a tool that helps develop Node.js applications by
    automatically starting the Node application when file changes in the directory are detected
