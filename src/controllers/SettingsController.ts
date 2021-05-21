import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

class SettingsController {

  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    return response.json(settings);
  };
};

export { SettingsController };