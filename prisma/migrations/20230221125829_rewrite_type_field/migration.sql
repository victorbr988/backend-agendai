/*
  Warnings:

  - You are about to drop the column `priceService` on the `Barber` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Barber" DROP COLUMN "priceService",
ADD COLUMN     "priceServices" DOUBLE PRECISION[];
