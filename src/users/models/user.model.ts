import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  tabel: string;

  @Column
  firstName: string;

  @Column
  lastName: string;
}
