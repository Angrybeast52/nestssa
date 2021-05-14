import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  
  import { CryptopcurrencyService } from './cryptocurrency.service';
  import { CreateCrytocurrencyDto } from './dtos/create-Cryptocurrency.dto';
  import { GetIdCrytocurrencyDto, GetCrytocurrencyDto } from './dtos/get-Cryptocurrency.dto';
  import { UpdateCrytocurrencyDto } from './dtos/update-Cryptocurrency.dto';
  
  @Controller('cryptopcurrency')
  export class CryptocurrencyController {
    constructor(private CryptopcurrencyService: CryptopcurrencyService) {}
  
    @Post()
    async create(@Body() CreateCrytocurrencyDto: CreateCrytocurrencyDto): Promise<GetIdCrytocurrencyDto> {
      return this.CryptopcurrencyService.create(CreateCrytocurrencyDto);
    }
  
    @Get()
    async getAll(): Promise<GetCrytocurrencyDto[]> {
      return this.CryptopcurrencyService.getAll();
    }
  
    @Get(':id')
    async getById(@Param('id') id: string): Promise<GetCrytocurrencyDto> {
      return this.CryptopcurrencyService.getById(id);
    }
  
    @Put(':id')
    async updateById(
      @Param('id') id: string,
      @Body() user: UpdateCrytocurrencyDto,
    ): Promise<GetIdCrytocurrencyDto> {
      return this.CryptopcurrencyService.updateById(id, user);
    }
  
    @Delete(':id')
    async deleteById(@Param('id') id: string): Promise<GetIdCrytocurrencyDto> {
      return this.CryptopcurrencyService.deleteById(id);
    }
  }