import { ApiError } from "../../Models/DTO/ApiResponse/ApiError";
import type UserRefreshTokensRepository from "../../Repository/UserRefreshTokens/UserRefreshTokens";
import  jwt  from "jsonwebtoken";

export class UserRefreshTokenService {
  constructor(
    private repository: UserRefreshTokensRepository
  ) {
    this.repository = repository
  }

  async refresh(refreshToken: string): Promise<{ accessToken: string }>{
  const refreshTokenBD = await this.repository.getByRefreshToken(refreshToken);

  if (!refreshTokenBD) {
    throw ApiError.Unauthorized("Invalid refresh token");
  }
  if(refreshTokenBD.expiresAt < new Date()){
    await this.repository.inactive(refreshTokenBD.id)
    throw ApiError.Unauthorized("refreshToken expired");
  }
  
  if(!refreshTokenBD.isActive){
    throw ApiError.Unauthorized("Invalid refresh token");
  }


  const accessToken = jwt.sign(
        {
          id: refreshTokenBD.userId
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "15m"
        }
      );

  return { accessToken: accessToken };
  
}
}