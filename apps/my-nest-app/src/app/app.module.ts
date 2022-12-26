import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../users/users.module';
import { UserController } from '../users/users.controller';
import { UserService } from '../users/users.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
