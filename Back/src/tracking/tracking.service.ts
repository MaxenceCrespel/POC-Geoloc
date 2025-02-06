import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracking } from '../entities/tracking.entity';
import { UsersService } from '../user/user.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking)
    private trackingRepository: Repository<Tracking>,
    private usersService: UsersService,
  ) {}

  async createTracking(livreur_name: string,livreur_id: string, latitude: number, longitude: number, speed_kmh: number): Promise<Tracking> {
    const livreur = await this.usersService.findById(livreur_id);
    if (!livreur) {
      throw new Error("Livreur non trouvé");
    }

    const tracking = this.trackingRepository.create({ livreur_name, livreur_id, latitude, longitude, speed_kmh });
    return this.trackingRepository.save(tracking);
  }

  async getTrackingByLivreur(livreur_id: string): Promise<Tracking[]> {
    return this.trackingRepository.find({ where: { livreur_id }, order: { timestamp: 'DESC' } });
  }
}
