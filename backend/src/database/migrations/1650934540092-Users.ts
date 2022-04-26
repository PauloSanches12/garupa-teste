import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Users1650934540092 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "phone",
                        type: "int"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "state",
                        type: "char",
                        length: "2"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
