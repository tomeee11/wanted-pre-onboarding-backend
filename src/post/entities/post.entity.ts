import { Apply } from 'src/apply/entities/apply.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  // @ManyToOne(() => User, (user) => user.post, { onDelete: 'CASCADE' })
  // user: User;

  @OneToMany(() => Apply, (apply) => apply.post, { cascade: true })
  apply: Apply;

  // 사용자(회사) 테이블 생성을 하지 않고 컬럼을 추가하여 테스트
  @Column()
  company_id: number;
}
