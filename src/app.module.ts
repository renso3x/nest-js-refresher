import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
