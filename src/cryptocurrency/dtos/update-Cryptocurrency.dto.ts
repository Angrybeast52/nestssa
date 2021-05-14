import { IComparedCryptopcurrency } from "../interface/Cryptopcurrency.interface";

export interface UpdateCrytocurrencyDto {
    ci: string;
    name: string;
    alias: string;
    dollarvalue: string;
    wayundermine: string;
    cryptovalue: IComparedCryptopcurrency[];
  }