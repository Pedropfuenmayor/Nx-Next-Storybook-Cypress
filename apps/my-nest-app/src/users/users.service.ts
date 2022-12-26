import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import type { User } from '../model';
@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}
  async signup(userData: User) {
    try {
        const user = await this.prisma.users.create({
          data: {
            password: userData.password,
            email: userData.email,

            
          },
        });
  
        return user
      } catch (error) {
        if (
          error instanceof
          PrismaClientKnownRequestError
        ) {
            throw new Error(error.message);
        }
        throw error;
      }
  }
}
