import { IComparedCryptopcurrency } from "../interface/Cryptopcurrency.interface";

export interface CreateCrytocurrencyDto {
    name: string;
    alias: string;
    dollarvalue: string;
    wayundermine: string;
    cryptovalue: IComparedCryptopcurrency[];
  }