import { Module } from '@nestjs/common';
import { TextToImageController } from './text-to-image.controller';

@Module({
  imports: [],
  controllers: [TextToImageController],
  providers: [],
  exports: [],
})
export class TextToImageModule {}
