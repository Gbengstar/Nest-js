import { AppRepository } from './app.repository';
import { User, UserSchema } from './app.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AppRepository],
  exports: [AppRepository],
})
export class SchemaModule {}
