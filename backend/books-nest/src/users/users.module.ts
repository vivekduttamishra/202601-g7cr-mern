import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UsersController } from './users/users.controller';

@Module({
  providers: [UserService],
  controllers: [UsersController]
})
export class UsersModule {}
