import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
    tabel: string,
  ): Promise<any> {
    const user = await this.usersService.findByNameAndTabel(username, tabel);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { id: user.id, tabel: user.tabel, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET,
      }),
      user: payload,
    };
  }
}
