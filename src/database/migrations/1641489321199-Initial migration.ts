import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1641489321199 implements MigrationInterface {
    name = 'InitialMigration1641489321199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullname" character varying(255) NOT NULL, "birthdate" TIMESTAMP WITH TIME ZONE NOT NULL, "identification" integer NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "father_id" integer, "mother_id" integer, CONSTRAINT "UQ_140d91acc242af813ce91987621" UNIQUE ("identification"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_a3ffb1c0c8416b9fc6f907b743" ON "users" ("id") `);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a99c815f5eb6fd2a47aa3fbe16e" FOREIGN KEY ("father_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_da52512bbfeb125359b0a7d3014" FOREIGN KEY ("mother_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_da52512bbfeb125359b0a7d3014"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a99c815f5eb6fd2a47aa3fbe16e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a3ffb1c0c8416b9fc6f907b743"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
