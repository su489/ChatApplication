import { Server } from "socket.io"

import http from 'http';
import express from 'express'


const app = express();


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
})

export const getReceiverSocketId = (receiverId) => {
    return users[receiverId];
}

const users = {};

//used to listen events on server side.

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId) {
        users[userId] = socket.id;
        console.log("Hello", users);
    }

    // use to sned the events to all connected users

    io.emit("getOnlineUsers", Object.keys(users));

    //used to listen client side events server side

    socket.on("disconnect", (socket) => {
        console.log("a user disconnected", socket.id);
        delete users[userId];
        io.emit("getOnlineUses", Object.keys(users));
    });
});

export { app, io, server }