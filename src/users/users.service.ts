import { Injectable } from '@nestjs/common';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './models/user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userModel.create({ ...createUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ attributes: ['username', 'tabel'] });
  }

  async findAllNames(): Promise<string[]> {
    const users = await this.findAll();

    return users.map(({ username }) => username);
  }

  async findAllTabels(): Promise<string[]> {
    const users = await this.findAll();

    return users.map(({ tabel }) => tabel);
  }

  async findById(id: number): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByNameAndTabel(
    username: string,
    tabel: string,
  ): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        username,
        tabel,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findById(id);

    if (user) {
      await user.update(updateUserDto);
    }
  }

  async remove(id: number): Promise<void> {
    const user = await this.findById(id);

    if (user) {
      await user.destroy();
    }
  }
}
