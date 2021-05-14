import { Module } from '@nestjs/common';
import { CryptopcurrencyService } from './cryptocurrency.service';
import { CryptocurrencyController } from './cryptocurrency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cryptopcurrency,CryptopcurrencySchema } from './schema/Cryptocurrency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cryptopcurrency.name, schema: CryptopcurrencySchema },
    ]),
  ],
  providers: [CryptopcurrencyService],
  controllers: [CryptocurrencyController],
})
export class CryptocurrencyModule {}