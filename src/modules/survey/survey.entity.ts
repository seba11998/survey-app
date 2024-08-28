import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SurveyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  estiloMusical: string;
}
