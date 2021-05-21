interface ISettingsCreate {
  
}

class SettingsService {

  async create() {
    const settingsRepository = getCustomRepository(SettingsRepository);
  
    const settings = settingsRepository.create({
      chat,
      username
    });
  
    await settingsRepository.save(settings);
  }
};

export { SettingsService };