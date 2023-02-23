import { PrismaClient, Schedules } from "@prisma/client"

const prisma = new PrismaClient()

export async function createScheduleInDatabase(data: Schedules): Promise<string> {
  const scheduleCreated = await prisma.schedules.create({
    data
  })

  return scheduleCreated.id
}