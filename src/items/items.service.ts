import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    // private readonly items: Item[] = [
    //     {
    //         id: "1555777",
    //         name: "Item One",
    //         qty: 100,
    //         description: "This is item one"
    //     },
    //     {
    //         id: "99999",
    //         name: "Item One",
    //         qty: 600,
    //         description: "This is item two"
    //     },
    //     {
    //         id: "55555",
    //         name: "Item One",
    //         qty: 900,
    //         description: "This is item three"
    //     },

       
    // ]
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){

    }
    async findAll() : Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findOne(id: string) : Promise<Item>{
        return await this.itemModel.findOne({_id:id})
    }

    async create(item: Item) : Promise<Item>{
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async delete(id: string) : Promise<Item>{
        return await this.itemModel.findByIdAndRemove(id)
    }

    async update(id: string, item: Item) : Promise<Item>{
        return await this.itemModel.findByIdAndUpdate(id, item, {
            new: true
        })
    }
}
