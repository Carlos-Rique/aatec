import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('address')
class Address {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  number: number;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  zip_code: number
}

export {Address}