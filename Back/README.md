# NestJS Tracking Service

This NestJS project implements a position tracking service for delivery drivers. It uses TypeORM with MongoDB for data persistence.

## Installation

1.  **Prerequisites:** Make sure you have Node.js and npm (or yarn) installed on your system.

2.  **Installing the NestJS CLI (if necessary):**

    ```bash
    npm i -g @nestjs/cli
    ```

3.  **Installing project dependencies:**

    ```bash
    npm install
    ```
    Or if you use yarn:
    ```bash
    yarn install
    ```

    This will install the necessary packages, including:
    *   `@nestjs/core`
    *   `@nestjs/common`
    *   `@nestjs/platform-express`
    *   `@nestjs/typeorm`
    *   `typeorm`
    *   `mongodb@^5.2.0`
    *   `@nestjs/schedule`
    *   `class-validator`
    *   `class-transformer`

4.  **Database configuration:**

    *   Make sure MongoDB is installed and running.
    *   Configure the database connection information in the `ormconfig.json` file (or directly in the `TypeOrmModule.forRoot()` of your `DatabaseModule`). Example:

    ```json
    {
      "type": "mongodb",
      "url": "mongodb://username:password@host:port/database_name?authSource=admin", // Replace with your information
      "database": "database_name",
      "entities": ["dist/**/*.entity{.ts,.js}"], // Path to your entities
      "synchronize": false, // Important: do not use synchronize in production
      "migrations": ["dist/migrations/*{.ts,.js}"],
      "cli": {
        "migrationsDir": "src/migrations"
      }
    }
    ```

5.  **Creating migrations:**

    ```bash
    npm run typeorm migration:generate -n CreateTrackingAndUserEntities
    ```
    Then edit the migration file to create the `users` and `trackings` collections in your MongoDB database.

6.  **Running migrations:**

    ```bash
    npm run typeorm migration:run
    ```

## Starting the project

```bash
npm run start:dev