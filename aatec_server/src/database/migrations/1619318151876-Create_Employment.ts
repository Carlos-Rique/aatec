import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmployment1619318151876  implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "employment",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        width: 4,
                        isPrimary: true
                    },
                    {
                        name: 'associate_id',
                        type: 'int',
                        width: 4,
                    },
                    {
                        name: 'company',
                        type: 'varchar',
                        length: "40"
                    },
                    {
                        name: 'started_at',
                        type: 'date'
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        length: "40"
                    },
                    {
                        name: 'sale',
                        type: 'float',
                    },
                    {
                        name: 'roles',
                        type: 'varchar'
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKAssociate",
                        referencedTableName: "associate",
                        referencedColumnNames: ['id'],
                        columnNames: ['associate_id'],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('employment')
    }

}
