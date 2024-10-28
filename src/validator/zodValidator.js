import { z } from 'zod';


export const validate = (schema) => {
    return async (req,res,next) => {
        try{
            console.log(req.body);
            schema.parse(req.body);
            next();
        }catch(error){
            if (error instanceof z.ZodError) {
                // Extract the error details
                const errors = error.errors.map((err) => ({
                    path: err.path,        // The key or path that has the error
                    message: err.message,  // The error message
                    code: err.code         // The Zod error code (e.g., "invalid_type", "too_small")
                }));
                console.log("Validation failed", errors);
                return res.status(400).json({
                    success: false,
                    message: "Validation Error",
                    errors: errors,
                })
            }
            return res.status(401).json({
                success: false,
                message: "Validation Error",
            })
        }
    }
}