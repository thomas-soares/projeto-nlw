import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSettings implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "settings",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true
              }
            ]
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
    
}