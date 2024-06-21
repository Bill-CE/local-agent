import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) { }

  redirection(): any {
    // return this.httpService.post('http://control-led.local/switch/led1/turn_on')
    // console.log('redirection')
  }
}