import  jwt  from "jsonwebtoken";
import "dotenv/config";
import { ApiError } from "../../Models/ApiResponse/ApiError";
import type UsersRepository from "../../Repository/Users/Users";
import type { User, UserCreate, UserIdParam, UserUpdate } from "../../Types/User";
import bcrypt from "bcrypt";
import type UserRefreshTokensRepository from "../../Repository/UserRefreshTokens/UserRefreshTokens";

class UsersService {
  private repository: UsersRepository;
  private RefreshTokenRepository: UserRefreshTokensRepository;


  constructor(repository: UsersRepository , RefreshTokenRepository: UserRefreshTokensRepository) {
    this.repository = repository;
    this.RefreshTokenRepository = RefreshTokenRepository;
  }

  async findAll(): Promise<User[]> {
    return this.repository.getAll();
  }

  async findById(id: UserIdParam): Promise<User | null> {
    return this.repository.getById(id);
  }

  async create(data: UserCreate): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.repository.create({
      ...data,
      password: hashedPassword,
    });
  }

  async update(id: UserIdParam, data: UserUpdate): Promise<User> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.repository.update(id, data);
  }

  async inactive(id: UserIdParam): Promise<User> {
    return this.repository.inactive(id);
  }

  async login(email: string, password: string): Promise< {accessToken: string, refreshToken: string}> {
    const user = await this.repository.getByEmail(email);
    
    if (!user || !user.isActive) {
      throw ApiError.BadRequest("Invalid email or password");
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw ApiError.BadRequest("Invalid email or password");
    }

    const accessToken = jwt.sign(
      {
        sub: user.id
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "15m"
      }
    );

    const refreshToken = crypto.randomUUID();
    
    await this.RefreshTokenRepository.create({
      userId: user.id,
      token: refreshToken,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return  {accessToken,
      refreshToken};
  }

  async logout(refreshToken: string): Promise<void> {
    const refreshTokenBD = await this.RefreshTokenRepository.getByRefreshToken(refreshToken);
    
    if (refreshTokenBD) {
      await this.RefreshTokenRepository.inactive(refreshTokenBD.id);
    }
    return;
  }

  
}

export default UsersService;
