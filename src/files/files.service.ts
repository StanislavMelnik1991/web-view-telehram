import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { mkdir, writeFile } from 'fs';
import { resolve, join } from 'path';
import { v1 } from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = `${v1()}.jpg`;
      const filePath = resolve(__dirname, '..', 'static');
      mkdir(filePath, { recursive: true }, (err) => {
        if (err) console.log(err);
      });
      writeFile(join(filePath, fileName), file.buffer, (err) => {
        if (err) console.log(err);
      });
      return fileName;
    } catch (e) {
      throw new HttpException(
        'save file error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
