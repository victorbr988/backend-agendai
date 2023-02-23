import { PrismaClient, Services } from "@prisma/client"

const prisma = new PrismaClient()

export async function createServiceInDatabase(data: Services): Promise<string> {
  const scheduleCreated = await prisma.services.create({
    data
  })

  return scheduleCreated.id
}