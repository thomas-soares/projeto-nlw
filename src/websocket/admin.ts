import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";

io.on("connect", async (socket) => {
  const connectionsService = new ConnectionsService();
  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();

  io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

  socket.on("admin_list_messages_by_user", params => {

  });
});