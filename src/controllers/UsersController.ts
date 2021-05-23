import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response) {
    const { email } = request.body;

    const usersService = new UsersService();

    await usersService.create();
  }
};

export { UsersController };