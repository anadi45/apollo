import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextToImageModule } from './text-to-image/text-to-image.module';

@Module({
  imports: [TextToImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
