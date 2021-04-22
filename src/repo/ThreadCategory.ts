import {
  PrimaryGeneratedColumn,
  Entity,
  Column,
  OneToMany,
} from 'typeorm';

import { Thread } from './Thread';
import { Timestamps } from './Timestamps';

@Entity({ name: 'ThreadCategories' })
export class ThreadCategory extends Timestamps {
    @PrimaryGeneratedColumn({ name: 'Id', type: 'bigint' })
    id!: string

    @Column('varchar', {
      name: 'Name',
      length: 100,
      unique: true,
      nullable: false,
    })
    name!: string

    @Column('varchar', {
      name: 'Description',
      length: 150,
      nullable: true,
    })
    description!: string

    @OneToMany(() => Thread, (thread) => thread.category)
    threads!: Thread[]
}
