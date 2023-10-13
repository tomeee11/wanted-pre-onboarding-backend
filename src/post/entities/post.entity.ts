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

  // 사용자(회사) 테이블 생성을 하지 않고 컬럼을 추가하여 테스트
  @Column()
  company_id: number;

  @Column()
  user_id: number;
}
