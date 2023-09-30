import express from 'express';
import { Server, Socket } from 'socket.io';
import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json());

const io = new Server(3001,{
  cors:{
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
  }
});

app.use('/api/users',userRoutes);

io.on("connection", (socket) => {
  console.log("SOCKET CONNECTED");
  socket.on('joinRoomCode',(roomCode)=>{
    socket.join(roomCode);

    // Send a welcome message to the user who joined
    socket.emit('message', 'Welcome to the room');

    // Send a message to all members in the room (including the sender)
    io.to(roomCode).emit('message', 'A user has joined the room');
    
    // Listen for chat messages
    socket.on('chatMessage',(data)=>{
      io.to(roomCode).emit("receiveChatMessage", data);
    });

    // Message on disconnection
    socket.on('disconnect',()=>{
      io.to(roomCode).emit('message','A user has left the room');
    });
  });
});

io.listen(3005);

app.listen(5000, () => {
  // console.log('Server listening on port 3001');
});
