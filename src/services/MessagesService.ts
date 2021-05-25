import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";


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