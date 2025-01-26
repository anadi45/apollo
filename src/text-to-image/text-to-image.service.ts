import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class TextToImageService {
  private client: OpenAI;
  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createImage(text: string): Promise<string> {
    return text;
  }
}
