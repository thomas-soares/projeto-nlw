import { io } from "../http";
import { ConnectionsService } from "../services/ConnectionsService";

io.on("connect", (socket) => {
  const connectionsService = new ConnectionsService();
  const allConnectionsWithoutAdmin = await connectionsService.findAllWithoutAdmin();
});