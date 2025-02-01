import { Module } from '@nestjs/common';
import { TextToImageController } from './text-to-image.controller';
import { TextToImageService } from './text-to-image.service';

@Module({
  imports: [],
  controllers: [TextToImageController],
  providers: [TextToImageService],
  exports: [TextToImageService],
})
export class TextToImageModule {}
