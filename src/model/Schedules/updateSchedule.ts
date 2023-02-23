import { PrismaClient } from "@prisma/client"
import { ScheduleProps } from "../../types";

const prisma = new PrismaClient()

export async function updateScheduleFields(id: string, data: ScheduleProps): Promise<string> {
  const scheduleUpdated = await prisma.schedules.update({
    where: { id },
    data
  })

  return scheduleUpdated.id;
}
