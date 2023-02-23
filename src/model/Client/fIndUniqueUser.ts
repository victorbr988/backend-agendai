import { Client, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function findUniqueUser(uniqueIdentifier: string): Promise<Client | null> {
  const clientFounded = await prisma.client.findUnique({
    where: { uniqueIdentifier },
    include: {
      schedules: {
        select: {
          barber: {
            select: {
              name: true
            }
          },
          services: true,
          dateSchedules: true
        }
      }
    }
  })

  return clientFounded;
}