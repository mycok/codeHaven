/* eslint-disable quotes */
import { BaseEntity, Column } from 'typeorm';

export class Timestamps extends BaseEntity {
    @Column('varchar', {
      name: 'CreatedBy',
      length: 60,
      default: () => `getpgusername()`,
      nullable: false,
    })
    createdBy!: string

    @Column('timestamp with local time zone', {
      name: 'CreatedOn',
      default: () => `now()`,
      nullable: false,
    })
    createdOn!: Date

    @Column('varchar', {
      name: 'LastModifiedBy',
      length: 60,
      default: () => `getpgusername`,
      nullable: false,
    })
    lastModifiedBy!: string

    @Column('timestamp with local time zone', {
      name: 'LastModifiedOn',
      default: () => `now()`,
      nullable: false,
    })
    lastModifiedOn!: Date
}
