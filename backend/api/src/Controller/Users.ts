import { ApiSuccess } from "../Models/ApiResponse/ApiSuccess";
import type { Request, Response, NextFunction } from "express";
import type UsersService from "../Services/Users/Users";
import { UserCreateSchema, UserIdParamSchema, UserLoginSchema, UserUpdateSchema } from "../Models/DTO/User";

export class PestDiseaseController {
    
    constructor(private service: UsersService ) {
    }

   login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
        const data = req.body
        const dataValidated = UserLoginSchema.parse(data)
        const {email, password} = dataValidated
        const result = await this.service.login(email, password)
        const response = await ApiSuccess.success("User Login successfully", result.accessToken)
        const isProduction = process.env.NODE_ENV === "production";
        
        res.cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            secure: isProduction,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: isProduction ? "none" : "lax",
            path: "/refresh-token",
        })
        
        res.status(response.statusCode).json(response)
   }catch(err){
    next(err)
   }
   }
   
   getAll = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.service.findAll()
            if(result.length === 0){
                const responseEmpty = await ApiSuccess.success("No Users found", [])
                return res.status(responseEmpty.statusCode).json(responseEmpty)
            }
            const response = await ApiSuccess.success("users found", result)
            return res.status(response.statusCode).json(response)
            
        } catch (err) {
            next(err)
        }
    }

    getById = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = UserIdParamSchema.parse(id)
            const result = await this.service.findById(idValidated)
            const response = await ApiSuccess.success("user found", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    create = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const data = req.body
            const dataValidated = UserCreateSchema.parse(data)
            const result = await this.service.create(dataValidated)
            const response = await ApiSuccess.created("User created", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    update = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = UserIdParamSchema.parse(id)
            const data = req.body
            const dataValidated = UserUpdateSchema.parse(data)
            const result = await this.service.update(idValidated, dataValidated)
            const response = await ApiSuccess.updated("Pest disease updated", result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }

    inactive = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id
            const idValidated = UserIdParamSchema.parse(id)
            const result =await this.service.inactive(idValidated)
            const response = await ApiSuccess.updated("User inactiveted" , result)
            res.status(response.statusCode).json(response)
        } catch (err) {
            next(err)
        }
    }
}
        