import { Injectable } from '@nestjs/common';
import { CollectionRepository } from './collection.repo';
import { ICollection } from 'src/types/types';

@Injectable()
export class CollectionService {
  constructor(private readonly collectionRepository: CollectionRepository) {}

  public async getCollectionByName(name: string): Promise<ICollection[]> {
    try {
      const allCollections: ICollection[] =
        await this.collectionRepository.findAll();
      const filteredCollections: ICollection[] = allCollections.filter(
        (collection) =>
          collection.name.toLowerCase().includes(name.toLowerCase()),
      );

      return filteredCollections;
    } catch (error) {
      console.error('Error getting collection by name:', error);
      throw new Error('Failed to get collection by name');
    }
  }
}
