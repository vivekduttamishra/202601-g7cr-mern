import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorsController } from './authors/authors.controller';
import { AuthorService } from './authors/author.service';
import { UsersModule } from './users/users.module';
import { ApiKeyValidatorService } from './api-key-validator/api-key-validator.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController,AuthorsController],
  providers: [AppService, AuthorService, ApiKeyValidatorService],
})
export class AppModule {}
