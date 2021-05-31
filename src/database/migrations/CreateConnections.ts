import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConnections implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
        new Table({
          name: "connections",
          columns: [
            
          ],
          
        })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }
    
}