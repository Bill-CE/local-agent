import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { connect } from "mqtt";

@Injectable()
export class MqttService {
    private mqttClient: ClientProxy;

    constructor() {
        this.mqttClient = ClientProxyFactory.create({
            transport: Transport.MQTT,
            options: {
                url: 'tcp://broker.mqtt.cool:1883',
            },
        });
    }


    sendMessage(topic: string, message: string): Promise<void> {
        return this.mqttClient.emit(topic, message).toPromise();
    }
}