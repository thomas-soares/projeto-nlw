import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean
  username: string;
}

class SettingsService {

  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
  
    const settings = settingsRepository.create({
      chat,
      username
    });
  
    await settingsRepository.save(settings);

    return settings;
  };

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username
    });

    return settings;
  };

  async update(username: string, chat: boolean) {
    await this.settingsRepository.createQueryBuilder()
    .update(Setting)
    .set({chat})
    .where("username = :username", {
      username
    })
    .execute();
  };
};

export { SettingsService };