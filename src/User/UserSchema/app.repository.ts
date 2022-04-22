import { User } from './app.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class AppRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async createUser(user: User): Promise<User> {
    return await this.userModel.create(user);
  }
  async findUser(filter: FilterQuery<User>): Promise<User> {
    return await this.userModel.findOne(filter);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({});
  }
  async findUpdate(filter: FilterQuery<User>, update: FilterQuery<User>) {
    return await this.userModel.findOneAndUpdate(filter, update);
  }
}
