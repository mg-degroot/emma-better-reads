import { Module } from '@nestjs/common';
import { BackendFeaturesUserModule } from '@nx-emma-indiv/backend/features';
import { BackendFeaturesBookModule } from '@nx-emma-indiv/backend/features';
import { BackendFeaturesWriterModule } from '@nx-emma-indiv/backend/features';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [BackendFeaturesUserModule, BackendFeaturesBookModule, BackendFeaturesWriterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
