export class ApiSuccess<T> {
    public statusCode: number;
    public message: string;
    public data: T;
    constructor(message: string, statusCode: number, data: T) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data; 
    }

    static async success<T>(message: string, data: T) {
        const response = new ApiSuccess<T>(message, 200, data)
        return response
    }

    static async noContent(message: string) {
        const response = new ApiSuccess(message, 204, {})
        return response
    }

    static async created(message: string, data: unknown) {
        const response = new ApiSuccess(message, 201, data)
        return response
    }

    static async updated<T>(message: string , data: T) {
        const response = new ApiSuccess(message, 200, data)
        return response
    }
}