import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
         type: 'mariadb',
          host: 'localhost',
      })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
