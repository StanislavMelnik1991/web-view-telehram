import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { existsSync, mkdir, writeFile } from 'fs';
import { resolve, join } from 'path';
import { v1 } from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = `${v1()}.jpg`;
      const filePath = resolve(__dirname, '..', 'static');
      if (existsSync(filePath)) {
        mkdir(filePath, { recursive: true }, (err) => {
          if (err)
            throw new HttpException(
              'save file error',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          console.log('The file has been saved!');
        });
        writeFile(join(fileName, filePath), file.buffer, (err) => {
          if (err)
            throw new HttpException(
              'save file error',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          console.log('The file has been saved!');
        });
      }
      console.log(filePath);
      return fileName;
    } catch (e) {
      throw new HttpException(
        'save file error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
