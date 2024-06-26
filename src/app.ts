import express from 'express';
import { createServer } from 'node:http';
// import { fileURLToPath } from 'node:url';
// import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const socket = new Server(server);

// const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', ( req, res) => {
    res.send("Hello world!");
});

socket.on('connection', (connection) => {
    console.log(connection);
});

const PORT = process.env.PORT || 3009

server.listen(PORT, () => {
    console.log('server running at http://localhost:3009');
});