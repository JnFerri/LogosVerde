import { UserRefreshTokenController } from "../Controller/UserRefreshTokens";
import UserRefreshTokensRepository from "../Repository/UserRefreshTokens/UserRefreshTokens";
import UsersRepository from "../Repository/Users/Users";
import { UserRefreshTokenService } from "../Services/UserRefreshTokens/UserRefreshTokens";
import UsersService from "../Services/Users/Users";


const repository = new UserRefreshTokensRepository();
const userRepository = new UsersRepository();
const service = new UserRefreshTokenService(repository);
const userService = new UsersService(userRepository,repository);
const controller = new UserRefreshTokenController(service, userService);

export default controller;