-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_barberId_fkey";

-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_clientId_fkey";

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("id") ON DELETE CASCADE ON UPDATE CASCADE;
