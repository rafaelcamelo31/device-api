import { IsAlpha, IsPositive, MaxLength } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Device {
  @PrimaryGeneratedColumn()
  id: string;

  @ManyToOne(() => Category)
  category: Category;

  @MaxLength(16)
  @IsAlpha()
  @Column()
  color: string;

  @IsPositive()
  @Column()
  partNumner: number;
}
