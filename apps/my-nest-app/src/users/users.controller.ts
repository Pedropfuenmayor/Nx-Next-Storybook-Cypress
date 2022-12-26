import { Controller, Post, Body } from '@nestjs/common';
import { User } from '../model';

import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  signup(@Body() userData: User) {
    return this.userService.signup(userData);
  }
}
