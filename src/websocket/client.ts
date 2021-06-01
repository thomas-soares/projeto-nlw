import { io } from '../http';
import { ConnectionsService } from '../services/ConnectionsService';

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();

  socket.on("client_first_access", async (params) => {
    const socket_id = socket.id;

    await connectionsService.create({
      socket_id,
      user_id
    });
  });
});