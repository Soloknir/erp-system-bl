import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false })
export class User extends Model {
  @Column
  declare public tabel: string;

  @Column
  declare public username: string;

  @Column
  declare public password: string;
}
