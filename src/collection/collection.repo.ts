import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { ICollection } from 'src/types/types';
import { API_COLLECTION } from 'src/api-route';

@Injectable()
export class CollectionRepository {
  public async findAll(): Promise<ICollection[]> {
    try {
      const response = await axios.get<ICollection[]>(API_COLLECTION);
      return response.data;
    } catch (error) {
      console.error('Error fetching collection:', error);
      throw new Error('Failed to fetch collection');
    }
  }
}
