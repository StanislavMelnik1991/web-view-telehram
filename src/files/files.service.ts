import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { mkdir, writeFile, rm } from 'fs';
import { MemoryStoredFile } from 'nestjs-form-data';
import { resolve, join } from 'path';
import { v1 } from 'uuid';

@Injectable()
export class FilesService {
  async createImage({
    file,
    path,
  }: {
    file: MemoryStoredFile;
    path: string;
  }): Promise<string> {
    try {
      const fileName = `${v1()}.${file.extension}`;
      const filePath = resolve(__dirname, '..', 'static', path);
      mkdir(filePath, { recursive: true }, (err) => {
        if (err) {
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
        writeFile(join(filePath, fileName), file.buffer, (err) => {
          if (err)
            throw new HttpException(
              err.message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        });
      });

      return resolve(path, fileName);
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async deleteImage(img: string): Promise<void> {
    try {
      const filePath = resolve(__dirname, '..', 'static', 'avatar');
      const file = join(filePath, img);
      rm(file, { force: true, recursive: true }, (err) => {
        if (err)
          throw new HttpException(
            err.message,
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
      });
    } catch (e: any) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
