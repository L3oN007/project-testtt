import { Controller, Get, Query } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { ICollection } from 'src/types/types';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get('/search')
  async getCollectionByName(
    @Query('name') name: string,
  ): Promise<ICollection[]> {
    try {
      const collections =
        await this.collectionService.getCollectionByName(name);
      return collections;
    } catch (error) {
      // Handle errors or log them as needed
      console.error('Error in getCollectionByName:', error);
      throw new Error('Failed to get collection by name');
    }
  }
}
