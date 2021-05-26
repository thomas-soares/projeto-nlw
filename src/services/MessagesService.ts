import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMesssageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMesssageCreate) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const message = messagesRepository.create({
      admin_id,
      text,
      user_id
    });

    await MessagesRepository.save(message);

    return message;
  }
};

export { MessagesService };