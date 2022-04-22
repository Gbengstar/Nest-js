//import { CreateUserDto } from 'src/User/Dto/User.Dto';
import { User } from './UserSchema/app.schema';
import { AppRepository } from './UserSchema/app.repository';
import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';

@Injectable()
export class AppService {
  constructor(public appRepo: AppRepository) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createUserMet(body: User) {
    return await this.appRepo.createUser(body);
  }

  async findUser(filter: FilterQuery<User>) {
    return await this.appRepo.findUser(filter);
  }

  async findUpate(filter: FilterQuery<User>, update: FilterQuery<User>) {
    return await this.appRepo.findUpdate(filter, update);
  }
}
