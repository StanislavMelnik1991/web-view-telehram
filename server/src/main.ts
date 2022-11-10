import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () =>
    process.stdout.write(`server started on port: ${PORT}`),
  );
}
bootstrap();
