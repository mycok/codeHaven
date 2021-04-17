import { Length } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';

import { Thread } from './Thread';
@Entity({ name: 'Users' })
export class User {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('varchar', {
      name: 'UserName',
      length: 60,
      unique: true,
      nullable: false,
    })
    username!: string

    @Column('varchar', {
      name: 'Email',
      length: 120,
      unique: true,
      nullable: false,
    })
    email!: string

    @Column('varchar', {
      name: 'Password',
      length: 100,
      nullable: false,
    })
    @Length(8, 10)
    password!: string

    @Column('boolean', {
      name: 'Confirmed',
      default: false,
      nullable: false,
    })
    confirmed!: boolean

    @Column('boolean', {
      name: 'isDisabled',
      default: false,
      nullable: false,
    })
    isDisabled!: boolean

    @OneToMany(() => Thread, (thread) => thread.user)
    threads!: Thread[]
}
