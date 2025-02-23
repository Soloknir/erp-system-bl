import { CreationOptional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ timestamps: false })
export class User extends Model {
  declare id: CreationOptional<number>;

  @Column
  declare public tabel: string;

  @Column
  declare public username: string;

  @Column
  declare public password: string;
}
