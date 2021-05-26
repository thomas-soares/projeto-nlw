import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';

class MessagesController {

  async create(request: Request, response: Response) {
    const messagesService = new MessagesService();

    const message = await messagesService.create({
      admin_id,
      text,
      user_id
    });
  };
};

export { MessagesController };