import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  position: string;

  @Column({ default: 0 })
  point: number;

  @Column()
  description: string;

  @Column()
  skill: string;

  // @ManyToMany(() => User, (user) => user.post, { onDelete: 'CASCADE' })
  // user: User;
}
