import { Module } from '@nestjs/common';
import { CryptopcurrencyService } from './cryptocurrency.service';
import { CryptocurrencyController } from './cryptocurrency.controller';

@Module({
  providers: [CryptopcurrencyService],
  controllers: [CryptocurrencyController]
})
export class CryptocurrencyModule {}
