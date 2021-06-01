import { getCustomRepository } from "typeorm";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

class ConnectionsService {
  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    
  }
};

export { ConnectionsService };