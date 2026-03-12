import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';
dotenv.config();

const port = process.argv[2] || process.env.PORT || 4000;


(async()=>  {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  })
})();



