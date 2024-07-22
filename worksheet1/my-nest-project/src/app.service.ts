import { Injectable } from '@nestjs/common';
import { ApplicationConfig } from '@nestjs/core';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Jovanas Application!';
  }
}
