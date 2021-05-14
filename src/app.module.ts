import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptocurrencyModule } from './cryptocurrency/cryptocurrency.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:xSKQnXSHIPLHjskd@cluster0.x1w77.mongodb.net/Cluster0?retryWrites=true&w=majority',
    ),
    CryptocurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
