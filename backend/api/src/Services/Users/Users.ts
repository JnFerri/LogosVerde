import  jwt  from "jsonwebtoken";
import "dotenv/config";
import { ApiError } from "../../Models/ApiResponse/ApiError";
import type UsersRepository from "../../Repository/Users/Users";
import type { User, UserCreate, UserIdParam, UserUpdate } from "../../Types/User";
import bcrypt from "bcrypt";

class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
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
        id: user.id
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "15m"
      }
    );

    const refreshToken = crypto.randomUUID();

    return  {accessToken,
      refreshToken};
  }

  
}

export default UsersService;
