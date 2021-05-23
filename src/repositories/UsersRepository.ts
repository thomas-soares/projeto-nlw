import { Entity } from "typeorm";
import { User } from "../entities/User";

@Entity(User)
class UsersRepository extends Repository<User> {};

export { UsersRepository };