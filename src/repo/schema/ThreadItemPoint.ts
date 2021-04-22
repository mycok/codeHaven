import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';

import { ThreadItem } from './ThreadItem';
import { User } from './User';
import { Timestamps } from './Timestamps';

@Entity({ name: 'ThreadItemPoints' })
export class ThreadItemPoint extends Timestamps {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('boolean', { name: 'IsDecrement', default: false, nullable: false })
    isDecrement!: boolean

    @ManyToOne(() => User, (user) => user.threadItemPoints)
    user!: User

    @ManyToOne(() => ThreadItem, (threadItem) => threadItem.threadItemPoints)
    threadItem!: ThreadItem
}
