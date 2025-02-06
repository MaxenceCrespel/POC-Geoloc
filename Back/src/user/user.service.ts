import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(name: string): Promise<User> {
    const user = this.usersRepository.create({ name });
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }


  async findById(id: string): Promise<User | null> {
    const objectId = new ObjectId(id);
    return this.usersRepository.findOne({ where: { _id: objectId } });
  }

}
