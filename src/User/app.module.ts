import { SchemaModule } from './UserSchema/app.Module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), SchemaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
