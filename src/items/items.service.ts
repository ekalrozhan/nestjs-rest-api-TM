import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1555777",
            name: "Item One",
            qty: 100,
            description: "This is item one"
        },
        {
            id: "99999",
            name: "Item One",
            qty: 600,
            description: "This is item two"
        },
        {
            id: "55555",
            name: "Item One",
            qty: 900,
            description: "This is item three"
        },

       
    ]

    findAll() : Item[] {
        return this.items
    }

    findOne(id: string) : Item{
        return this.items.find(item => item.id === id)
    }
}
