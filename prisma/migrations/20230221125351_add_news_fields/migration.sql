-- AlterTable
ALTER TABLE "Barber" ADD COLUMN     "priceService" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "services" TEXT[],
ALTER COLUMN "assessements" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Schedules" ADD COLUMN     "services" TEXT[];
