import { EntityRepository, Repository } from "typeorm";
import { Associate } from "../models/Associate";

@EntityRepository(Associate)
export class AssociateRepository extends Repository<Associate> {
  
}