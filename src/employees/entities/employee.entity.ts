import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 10 })
  firstName: string;

  @Column({ length: 10 })
  lastName: string;

  @Column({ length: 100 })
  @Index({ unique: true })
  email: string;

  @Column({ length: 15 })
  @Index({ unique: true })
  number: string;

  @Column({ length: 1 })
  gender: string;

  @Column({ nullable: true })
  photo: string;

  @BeforeInsert()
  @BeforeUpdate()
  trimData() {
    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();
    this.email = this.email.toLowerCase();
    this.number = this.number.replace(/[^\d\+]/g, '');
  }
}
