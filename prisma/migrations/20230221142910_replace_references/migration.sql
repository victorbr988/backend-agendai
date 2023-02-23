-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_barberId_fkey";

-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_barberId_fkey";

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("uniqueIdentifier") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("uniqueIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "Barber"("uniqueIdentifier") ON DELETE CASCADE ON UPDATE CASCADE;
