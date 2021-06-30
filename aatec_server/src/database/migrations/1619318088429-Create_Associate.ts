import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAssociate1619318088429 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "associate",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: "increment",
                        width: 4,
                        isPrimary: true
                    },
                    {
                        name: 'address_id',
                        type: 'int',
                        width: 4,
                        isNullable: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: "40"
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        length: "40"
                    },
                    {
                        name: 'cpf',
                        type: 'char',
                        isUnique: true,
                        length: "11"
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                        length: "20"
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: "32"
                    },
                    {
                        name: 'birth_date',
                        type: 'date'
                    },
                    {
                        name: 'linkedin',
                        type: 'varchar',
                        length: "40",
                        isNullable: true
                    },
                    {
                        name: 'photo',
                        type: 'varchar',
                        length: "40",
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKAddress",
                        referencedTableName: "address",
                        referencedColumnNames: ['id'],
                        columnNames: ['address_id'],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('associate')
    }

}
