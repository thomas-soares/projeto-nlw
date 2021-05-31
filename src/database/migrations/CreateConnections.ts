import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateConnections implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
    
}