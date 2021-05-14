import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IComparedCryptopcurrency } from '../interface/Cryptopcurrency.interface';

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

  @Prop({ required: true })
  cryptovalue: IComparedCryptopcurrency[];
}

export const CryptopcurrencySchema = SchemaFactory.createForClass(Cryptopcurrency);