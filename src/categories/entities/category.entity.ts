import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @MaxLength(128)
  @IsNotEmpty()
  @Column()
  name: string;
}
