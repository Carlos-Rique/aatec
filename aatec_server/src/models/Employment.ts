import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Associate } from "./Associate";


@Entity('employment')
export class Employment {
  @PrimaryColumn()
  readonly id: number;

  @Column()
  associate_id: number;

  @ManyToOne(() => Associate, associate => associate.employments)
  associate: Associate;

  @Column()
  company: string;

  @Column()
  started_at: Date;

  @Column()
  position: string;

  @Column()
  sale: number;

  @Column()
  roles: string
}