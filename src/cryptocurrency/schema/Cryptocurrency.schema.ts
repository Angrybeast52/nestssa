import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CryptopcurrencyDocument = Cryptopcurrency & Document;

@Schema()
export class Cryptopcurrency extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  alias: string;

  @Prop({ required: true })
  dollarvalue: string;

  @Prop({ required: true })
  wayundermine: string;
}

export const CryptopcurrencySchema = SchemaFactory.createForClass(Cryptopcurrency);