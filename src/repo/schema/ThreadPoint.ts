import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';

import { User } from './User';
import { Thread } from './Thread';
import { Timestamps } from './Timestamps';

@Entity({ name: 'ThreadPoints' })
export class ThreadPoint extends Timestamps {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('boolean', { name: 'IsDecrement', default: false })
    isDecrement!: boolean

    @ManyToOne(() => User, (user) => user.threadPoints)
    user!: User

    @ManyToOne(() => Thread, (thread) => thread.threadPoints)
    thread!: Thread
}
