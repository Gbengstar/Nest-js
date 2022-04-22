import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({ timestamps: true })
export class User {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  phone_number: string;

  @Prop()
  point: number;
  @Prop()
  regNo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
