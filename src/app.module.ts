import { Module } from '@nestjs/common';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [CollectionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
