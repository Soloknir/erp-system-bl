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
    return this.userModel.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByName(username: string): Promise<User | null> {
    return this.userModel.findOne({
      where: {
        username,
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
