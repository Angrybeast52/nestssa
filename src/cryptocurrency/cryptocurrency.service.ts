import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Cryptopcurrency, CryptopcurrencyDocument } from './schema/Cryptocurrency.schema';
import { CreateCrytocurrencyDto } from './dtos/create-Cryptocurrency.dto';
import { GetIdCrytocurrencyDto, GetCrytocurrencyDto } from './dtos/get-Cryptocurrency.dto';
import { UpdateCrytocurrencyDto } from './dtos/update-Cryptocurrency.dto';

@Injectable()
export class CryptopcurrencyService {
  constructor(@InjectModel(Cryptopcurrency.name) private CryptopcurrencyModel: Model<CryptopcurrencyDocument>) {}

  async create(CreateCrytocurrencyDto: CreateCrytocurrencyDto): Promise<GetIdCrytocurrencyDto> {
    const createdCryptopcurrency = await this.CryptopcurrencyModel.create({ ...CreateCrytocurrencyDto });
    return {
      id: createdCryptopcurrency._id,
    };
  }

  async getAll(): Promise<GetCrytocurrencyDto[]> {
    const Cryptopcurrencys = await this.CryptopcurrencyModel.find().lean();
    return Cryptopcurrencys.map((Cryptopcurrency) => {
      return {
        id: Cryptopcurrency._id,
        name: Cryptopcurrency.name,
        alias: Cryptopcurrency.alias,
        dollarvalue: Cryptopcurrency.dollarvalue,
        wayundermine: Cryptopcurrency.wayundermine,
        
      };
    });
  }

  async getById(id: string): Promise<GetCrytocurrencyDto> {
    const Cryptopcurrency = await this.CryptopcurrencyModel.findById(id).lean();
    return {
        id: Cryptopcurrency._id,
        name: Cryptopcurrency.name,
        alias: Cryptopcurrency.alias,
        dollarvalue: Cryptopcurrency.dollarvalue,
        wayundermine: Cryptopcurrency.wayundermine,
    };
  }

  async updateById(
    id: string,
    UpdateCrytocurrencyDto: UpdateCrytocurrencyDto,
  ): Promise<GetIdCrytocurrencyDto> {
    await this.CryptopcurrencyModel.updateOne({ _id: id }, UpdateCrytocurrencyDto);
    return {
      id,
    };
  }

  async deleteById(id: string): Promise<GetIdCrytocurrencyDto> {
    await this.CryptopcurrencyModel.deleteOne({ _id: id });
    return {
      id,
    };
  }
}