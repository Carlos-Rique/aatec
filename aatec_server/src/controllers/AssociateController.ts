import { Request, Response } from "express";
import { getConnection, getCustomRepository } from "typeorm";
import { Associate } from "../models/Associate";
import { AssociateRepository } from "../repositories/AssociateRepository";

class AssociateController {

  
  async index(request: Request, response: Response) {
    const associateRepository = getCustomRepository(AssociateRepository)

    const all = await associateRepository.find();

    return response.status(201).json(all);
  }

  async store(request: Request, response: Response) {
    const data = request.body;

    const associateRepository = getCustomRepository(AssociateRepository)
    const associate = associateRepository.create(data)

    await associateRepository.save(associate)
  
    return response.json(data)
  }

  async update(request: Request, response: Response) {
    const associateNew = request.body;
    const associateRepository = getCustomRepository(AssociateRepository)

    let associate = await associateRepository.findOneOrFail(request.AssociateId)

    Object.keys(associateNew).forEach(key => {
      associate[key] = associateNew[key];
    });

    await associateRepository.save(associate)

    return response.json(associate)
  }


  async show(request: Request, response: Response) {

    const associateRepository = getCustomRepository(AssociateRepository)

    const associate = await associateRepository.findOneOrFail(request.AssociateId)

    return response.json(associate)
  }
  

}

export { AssociateController };