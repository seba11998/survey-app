import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResultadosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  estiloMusical: string;

  @Column()
  count: number;
}
