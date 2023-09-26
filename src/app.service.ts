import { Injectable, Logger } from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { UserEvent } from './events/user.event';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello World!';
  }

  async createUser(data: CreateUser) {
    this.logger.log('Creating user', data);
    const userId = '1234';
    this.eventEmitter.emit('user.created', new UserEvent(userId, data.email));
  }

  //Emitting the event
  @OnEvent('user.created')
  WelcomeUserEvent(payload: UserEvent) {
    this.logger.log('Welcoming New User', payload.email);
  }

  @OnEvent('user.created', { async: true })
  async WelcomeGift(payload: UserEvent) {
    this.logger.log('Welcome gift is processing', payload.email);
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 5000));
    this.logger.log('Gift Sent', payload.email);
  }
}
