import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AssociateRepository } from "../repositories/AssociateRepository";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

class AuthController {

  
  async authenticate(request: Request, response: Response) {
    const {email, password} = request.body;
    
    const associateRepository = getCustomRepository(AssociateRepository) 
    // console.log(password)
    const associate = await associateRepository.findOne({where: { email } })

    if(!associate){return response.sendStatus(401);}

    const isValidPassword =  await bcrypt.compare(password, associate.password);
    console.log(isValidPassword)

    if(!isValidPassword){ return response.sendStatus(401);}
    const token = jwt.sign({id: associate.id}, 'secretahahaha', {expiresIn: '1d'})
  
    return response.json({
      associate,
      token
    })
  }

}

export { AuthController };