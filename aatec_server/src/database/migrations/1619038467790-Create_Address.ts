import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1619038467790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        width: 4,
                        isPrimary: true
                    },
                    {
                        name: 'number',
                        type: 'varchar',
                        length: "5",
                    },
                    {
                        name: "street",
                        type: "varchar",
                        length: '20'
                    },
                    {
                        name: "district",
                        type: "varchar",
                        length: '20'
                    },
                    {
                        name: "zip_code",
                        type: "int"
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address")
    }

}
