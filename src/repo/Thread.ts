import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Length } from 'class-validator';

import { User } from './User';
import { ThreadItem } from './ThreadItem';
import { ThreadPoint } from './ThreadPoint';
@Entity({ name: 'Threads' })
export class Thread {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('int', { name: 'Views', default: 0, nullable: false })
    views!: number

    @Column('boolean', { name: 'isDisabled', default: false, nullable: false })
    isDisabled!: boolean

    @Column('varchar', { name: 'Title', length: 150, nullable: false })
    @Length(5, 10)
    name!: string

    @Column('varchar', { name: 'Body', length: 2500, nullable: false })
    @Length(10, 2500)
    body!: string

    @ManyToOne(() => User, (user) => user.threads)
    user!: User

    @OneToMany(() => ThreadItem, (threadItems) => threadItems.thread)
    threadItems!: ThreadItem[]

    @OneToMany(() => ThreadPoint, (threadPoint) => threadPoint.thread)
    threadPoints!: ThreadPoint[]
}
