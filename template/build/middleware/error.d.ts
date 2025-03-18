import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../libs/utility-class.js";
import { Controller } from "../libs/types.js";
export declare const errorMiddleware: (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export declare const TryCatch: (func: Controller) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
