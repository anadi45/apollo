import { Body, Controller, Post } from '@nestjs/common';
import { TextToImageService } from './text-to-image.service';

class CreateImageDto {
  text: string;
}

@Controller('text-to-image')
export class TextToImageController {
  constructor(private readonly textToImageService: TextToImageService) {}

  @Post('')
  async createImageFromText(@Body() payload: CreateImageDto): Promise<string> {
    return this.textToImageService.createImage(payload.text);
  }
}
