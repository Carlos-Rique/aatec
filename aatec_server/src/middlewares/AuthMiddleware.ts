import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(
  req: Request, res: Response, next: NextFunction
){
  const { authorization } = req.headers;

  if(!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace('Bearer', '').trim();
  console.log(token)
  try {
    const data = jwt.verify(token, 'secretahahaha');
    
    const { id } = data as TokenPayload;
    req.AssociateId = id
 
    return next();
  } catch (error) {
    console.log(error)
    return res.sendStatus(401);
  }
}