import { BeforeInsert, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, BeforeUpdate } from "typeorm";
import { Address } from "./Address";
import { Employment } from "./Employment";
import bcrypt from 'bcryptjs';

@Entity("associate")
class Associate {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column()
  address_id: number;

  @OneToOne(() => Address)
  @JoinColumn({ name: 'address_id'})
  address: Address;

  @OneToMany(() => Employment, employment => employment.associate)
  employments: Employment[];
  
  @Column()
  name: string;

  @Column()
  last_name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  birth_date: Date;

  @Column()
  linkedin: string;

  @Column()
  photo: string;

  @CreateDateColumn()
  created_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password);
  }
  
}

export { Associate }