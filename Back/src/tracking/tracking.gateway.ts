import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { TrackingService } from './tracking.service';
import { UsersService } from '../user/user.service';

@WebSocketGateway({ cors: true })
export class TrackingGateway {
    @WebSocketServer()
    server: Server;

    constructor(
        private readonly trackingService: TrackingService,
        private readonly usersService: UsersService
    ) {
        this.startSimulation();
    }

    async startSimulation() {
        const livreurs = await this.usersService.findAll();

        setInterval(async () => {
            for (const livreur of livreurs) {
                const newPosition = this.generateRandomPosition(livreur._id.toString());
                await this.trackingService.createTracking(
                    livreur.name,
                    livreur._id.toString(),
                    newPosition.latitude,
                    newPosition.longitude,
                    newPosition.speed_kmh
                );
                this.server.emit('positionUpdate', {
                    livreur_name: livreur.name,
                    livreur_id: livreur._id,
                    latitude: newPosition.latitude,
                    longitude: newPosition.longitude,
                    speed_kmh: newPosition.speed_kmh,
                });

                console.log(`📍 Mise à jour du livreur ${livreur.name} (${livreur._id})`);
            }
        }, 10000);
    }

    generateRandomPosition(livreur_id: string) {
        const baseLat = 50.6365;
        const baseLng = 3.0635;
        const speed = Math.random() * (30 - 10) + 10;

        return {
            latitude: baseLat + (Math.random() - 0.5) * 0.01,
            longitude: baseLng + (Math.random() - 0.5) * 0.01,
            speed_kmh: speed,
        };
    }
}
