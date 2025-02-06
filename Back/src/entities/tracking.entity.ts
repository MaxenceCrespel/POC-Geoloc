import { Entity, ObjectIdColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: 'tracking' })
export class Tracking {
    @ObjectIdColumn()
    _id: string;

    @Column({ type: 'string', nullable: false })
    livreur_id: string;

    @Column({ type: 'string', nullable: false })
    livreur_name: string;

    @Column('double')
    latitude: number;

    @Column('double')
    longitude: number;

    @Column('double')
    speed_kmh: number;

    @CreateDateColumn()
    timestamp: Date;
}
