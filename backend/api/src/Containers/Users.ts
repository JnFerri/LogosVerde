import { UserController } from "../Controller/Users";
import UserRefreshTokensRepository from "../Repository/UserRefreshTokens/UserRefreshTokens";
import UsersRepository from "../Repository/Users/Users";
import UsersService from "../Services/Users/Users";


const repository = new UserRefreshTokensRepository();
const userRepository = new UsersRepository();
const service =  new UsersService(userRepository,repository);
const controller = new UserController(service);

export default controller;