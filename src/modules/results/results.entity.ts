import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResultsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estiloMusical: string;

  @Column()
  count: number;
}
