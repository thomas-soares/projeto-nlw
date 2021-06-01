import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';

io.on("connect", (socket) => {
  socket.on("client_first_access", async (params) => {
    console.log(params);

    await connectionsService.create({
      socket_id,
      user_id
    });
  });
});