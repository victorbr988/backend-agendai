/*
  Warnings:

  - The primary key for the `Schedules` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Schedules_id_seq";
