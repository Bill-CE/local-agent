import { Controller, Get, Inject, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import axios from 'axios';

@Controller('mqtt')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('MQTT_SERVICE') private client: ClientProxy
  ) { }

  @Get()
  getHello(): any {
    this.client.emit('test', '222')
  }

  @Get('sss')
  getHello2() {
    return 'getheelo2'
  }

  @MessagePattern('led1_on')
  handleLed1On(@Payload() message: any) {
    console.log('Received message:', message)
    axios.get('http://control-led.local/switch/led1/turn_on');
  }

  @MessagePattern('led1_off')
  handleLed1Off(@Payload() message: any) {
    console.log('Received message:', message)
    axios.get('http://control-led.local/switch/led1/turn_off');

  }

  @MessagePattern('led')
  handleLed(@Payload() message: any) {
    console.log('Received message:', message)
    if (message == 'on') {
      axios.get('http://control-led.local/switch/led1/turn_on');
    }
    else axios.get('http://control-led.local/switch/led1/turn_off');
  }
  //glasses
  @MessagePattern('glasses')
  handleGlasses(@Payload() message: any) {
    console.log('Received message:', message)
    if (message == 'head-on') {
      axios.get('http://control-glassess.local/switch/head/turn_on');
    }
    else if (message == 'head-off') {
      axios.get('http://control-glassess.local/switch/head/turn_off');
    }
    else if (message == 'door-on') {
      axios.get('http://control-glassess.local/switch/door/turn_on');
    }
    else if (message == 'door-off') {
      axios.get('http://control-glassess.local/switch/door/turn_off');
    }
    else if (message == 'foot-on') {
      axios.get('http://control-glassess.local/switch/foot/turn_on');
    }
    else if (message == 'foot-off') {
      axios.get('http://control-glassess.local/switch/foot/turn_off');
    }
    else if (message == 'sleep-press') {
      axios.get('http://control-glassess.local/button/sleep/press');
    }
    else if (message == 'awake-press') {
      axios.get('http://control-glassess.local/button/awake/press');
    }
  }
  // desk
  @MessagePattern('desk')
  handleDesk(@Payload() message: any) {
    console.log('Received message:', message)
    if (message == 'up-on') {
      axios.get('http://desk-frame.local/switch/up/turn_on');
    }
    else if (message == 'up-off') {
      axios.get('http://desk-frame.local/switch/up/turn_off');
    }
    else if (message == 'down-on') {
      axios.get('http://desk-frame.local/switch/down/turn_on');
    }
    else if (message == 'down-off') {
      axios.get('http://desk-frame.local/switch/down/turn_off');
    }
  }
  // char
  @MessagePattern('chair')
  handleChair(@Payload() message: any) {
    console.log('Received message:', message)
    if (message == 'up-on') {
      axios.get('http://chair-frame.local/switch/up/turn_on');
    }
    else if (message == 'up-off') {
      axios.get('http://chair-frame.local/switch/up/turn_off');
    }
    else if (message == 'down-on') {
      axios.get('http://chair-frame.local/switch/down/turn_on');
    }
    else if (message == 'down-off') {
      axios.get('http://chair-frame.local/switch/down/turn_off');
    }
    else if (message == 'front-on') {
      axios.get('http://chair-frame.local/switch/front/turn_on');
    }
    else if (message == 'front-off') {
      axios.get('http://chair-frame.local/switch/front/turn_off');
    }
    else if (message == 'back-on') {
      axios.get('http://chair-frame.local/switch/back/turn_on');
    }
    else if (message == 'back-off') {
      axios.get('http://chair-frame.local/switch/back/turn_off');
    }
    else if (message == 'light-on') {
      axios.get('http://chair-frame.local/switch/light/turn_on');
    }
    else if (message == 'light-off') {
      axios.get('http://chair-frame.local/switch/light/turn_off');
    }
    else if (message == 'eeg-on') {
      axios.get('http://chair-frame.local/switch/power-eeg/turn_on');
    }
    else if (message == 'eeg-off') {
      axios.get('http://chair-frame.local/switch/power-eeg/turn_off');
    }
    else if (message == 'chair-press') {
      axios.get('http://chair-frame.local/button/chair/press');
    }
    else if (message == 'bed-press') {
      axios.get('http://chair-frame.local/button/bed/press');
    }
    else if (message == 'default-press') {
      axios.get('http://chair-frame.local/button/default/press');
    }
    else {
      axios.get('http://chair-frame.local/switch/up/turn_off');
      axios.get('http://chair-frame.local/switch/down/turn_off');
      axios.get('http://chair-frame.local/switch/front/turn_off');
      axios.get('http://chair-frame.local/switch/back/turn_off');
    }
  }

}
