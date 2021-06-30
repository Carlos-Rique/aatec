import { EntityRepository, Repository } from "typeorm";
import { Employment } from "../models/Employment";

@EntityRepository(Employment)
export class EmploymentRepository extends Repository<Employment> {
  
}