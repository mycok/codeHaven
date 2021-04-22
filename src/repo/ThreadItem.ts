import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Length } from 'class-validator';

import { Thread } from './Thread';
import { User } from './User';
import { ThreadItemPoint } from './ThreadItemPoint';
import { Timestamps } from './Timestamps';

@Entity({ name: 'ThreadItems' })
export class ThreadItem extends Timestamps {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('int', { name: 'Views', default: 0, nullable: false })
    views!: number

    @Column('boolean', { name: 'isDisabled', default: false, nullable: false })
    isDisabled!: boolean

    @Column('varchar', { name: 'Body', length: 2500, nullable: false })
    @Length(10, 2500)
    body!: string

    @ManyToOne(() => Thread, (thread) => thread.threadItems)
    thread!: Thread

    @ManyToOne(() => User, (user) => user.threads)
    user!: User

    @OneToMany(() => ThreadItemPoint, (threadPointItem) => threadPointItem.threadItem)
    threadItemPoints!: ThreadItemPoint[]
}
