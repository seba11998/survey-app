import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EncuestaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  estiloMusical: string;
}
