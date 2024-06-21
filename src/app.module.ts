import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MQTT_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: 'tcp://broker.mqtt.cool:1883', // Replace with your MQTT broker URL
        },
      },
    ]), HttpModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }