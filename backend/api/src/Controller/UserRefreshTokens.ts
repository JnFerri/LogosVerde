import { ApiSuccess } from "../Models/DTO/ApiResponse/ApiSuccess";
import type { Request, Response, NextFunction } from "express";
import type { UserRefreshTokenService } from "../Services/UserRefreshTokens/UserRefreshTokens";
import type UsersService from "../Services/Users/Users";
import { ApiError } from "../Models/DTO/ApiResponse/ApiError";

export class UserRefreshTokenController {
  constructor(
    private service: UserRefreshTokenService,
    private userService: UsersService
  ) {}

  refresh = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken || typeof refreshToken !== "string") {
         throw ApiError.Unauthorized("Invalid refresh token");
      }
      const result = await this.service.refresh(refreshToken);
      const response = await ApiSuccess.success(
        "Token refreshed successfully",
        result.accessToken
      );

      return res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken || typeof refreshToken !== "string") {
         throw ApiError.Unauthorized("Invalid refresh token");
      }
      await this.userService.logout(refreshToken);

      const isProduction = process.env.NODE_ENV === "production";

      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        path: "/refresh-token",
      });

      const response = await ApiSuccess.noContent("Logged out successfully");
      return res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  };
}
