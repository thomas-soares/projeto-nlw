import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMesssageCreate {
  admin_id: string;
  text: string;
  user_id: string;
}

class MessagesService {

  async create() {
    const messagesRepository = getCustomRepository(MessagesRepository);

    messagesRepository.create({
      admin_id,
      text,
      user_id
    })
  }
};

export { MessagesService };