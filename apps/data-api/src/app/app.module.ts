import { Module } from '@nestjs/common';
import { BackendFeaturesUserModule } from '@nx-emma-indiv/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
